# Email Configuration Guide for EduVerseJr

This guide provides step-by-step instructions to configure email functionality for the contact/booking form on your website.

---

## Table of Contents

1. [Current Setup](#current-setup)
2. [Option 1: Gmail SMTP (Recommended for Testing)](#option-1-gmail-smtp)
3. [Option 2: SendGrid (Recommended for Production)](#option-2-sendgrid)
4. [Option 3: Keep Using Formspree](#option-3-formspree)
5. [Security Best Practices](#security-best-practices)
6. [Testing Your Email Setup](#testing-your-email-setup)

---

## Current Setup

Your website currently uses **Formspree** for handling form submissions:
- **File**: `client/src/components/BookingForm.tsx`
- **Current behavior**: Form data is sent to Formspree, which forwards it to your email
- **Limitation**: Requires Formspree account and endpoint configuration

---

## Option 1: Gmail SMTP

**Best for**: Small websites, testing, or if you don't expect high email volume (max ~500 emails/day)

### Step 1: Enable Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** (left sidebar)
3. Enable **2-Step Verification** if not already enabled
4. After enabling 2FA, go back to Security
5. Click on **App passwords** (under "How you sign in to Google")
6. Select app: **Mail**
7. Select device: **Other (Custom name)** → Enter "EduVerseJr Website"
8. Click **Generate**
9. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)
10. **Save this password securely** - you won't see it again!

### Step 2: Install Required Packages

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### Step 3: Create Environment Variables File

Create a `.env` file in your project root:

```env
# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_FROM=your-email@gmail.com
SMTP_TO=your-email@gmail.com
```

**Replace**:
- `your-email@gmail.com` with your actual Gmail address
- `your-16-char-app-password` with the password from Step 1

**Important**: Add `.env` to your `.gitignore` file to keep credentials safe!

### Step 4: Create Email Service (Backend)

Create a new file: `server/emailService.ts`

```typescript
import nodemailer from 'nodemailer';

interface EmailData {
  parentName: string;
  parentEmail: string;
  phoneNumber: string;
  childGrade: string;
  subjectInterest: string;
  message?: string;
}

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

export async function sendBookingEmail(data: EmailData) {
  const emailContent = `
    <h2>New Trial Class Booking Request</h2>

    <h3>Parent/Guardian Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${data.parentName}</li>
      <li><strong>Email:</strong> ${data.parentEmail}</li>
      <li><strong>Phone:</strong> ${data.phoneNumber}</li>
    </ul>

    <h3>Student Information:</h3>
    <ul>
      <li><strong>Grade:</strong> ${data.childGrade}</li>
      <li><strong>Subject Interest:</strong> ${data.subjectInterest}</li>
    </ul>

    ${data.message ? `
    <h3>Additional Message:</h3>
    <p>${data.message}</p>
    ` : ''}

    <hr>
    <p style="color: #666; font-size: 12px;">
      This email was sent from the EduVerseJr website contact form.
    </p>
  `;

  const mailOptions = {
    from: `"EduVerseJr Bookings" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO,
    replyTo: data.parentEmail,
    subject: `New Trial Class Booking - ${data.subjectInterest}`,
    html: emailContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
```

### Step 5: Update Server with Email Endpoint

Update `server/index.ts`:

```typescript
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendBookingEmail } from "./emailService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Add JSON body parser
  app.use(express.json());

  // Email API endpoint
  app.post("/api/send-booking", async (req, res) => {
    try {
      const result = await sendBookingEmail(req.body);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Email sending failed:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
```

### Step 6: Update Frontend Form

Update `client/src/components/BookingForm.tsx`:

Replace the `onSubmit` function (around line 47):

```typescript
const onSubmit = async (data: BookingFormData) => {
  setSubmitStatus("loading");
  setErrorMessage("");

  try {
    const response = await fetch("/api/send-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setSubmitStatus("success");
      reset();
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } else {
      throw new Error(result.message || "Failed to submit form");
    }
  } catch (error) {
    setSubmitStatus("error");
    setErrorMessage("Something went wrong. Please try again or contact us directly.");
    console.error("Form submission error:", error);
  }
};
```

---

## Option 2: SendGrid

**Best for**: Production websites, higher email volumes, better deliverability, email tracking

### Step 1: Create SendGrid Account

1. Go to https://sendgrid.com/
2. Click **Start for free** (100 emails/day free forever)
3. Complete the signup process
4. Verify your email address

### Step 2: Get API Key

1. Log in to SendGrid Dashboard
2. Go to **Settings** → **API Keys** (left sidebar)
3. Click **Create API Key**
4. Name: "EduVerseJr Website"
5. Permissions: Select **Full Access** (or **Restricted Access** → Mail Send only)
6. Click **Create & View**
7. **Copy the API key** (starts with `SG.`)
8. **Save this key securely** - you won't see it again!

### Step 3: Verify Sender Identity

**Important**: SendGrid requires sender verification to prevent spam.

1. In SendGrid Dashboard, go to **Settings** → **Sender Authentication**
2. Choose one option:
   - **Single Sender Verification** (easier, good for testing)
     - Click **Verify a Single Sender**
     - Fill in your details (use your business email)
     - Check your email and click verification link
   - **Domain Authentication** (better for production)
     - Follow the DNS setup wizard
     - Add CNAME records to your domain DNS

### Step 4: Install SendGrid Package

```bash
npm install @sendgrid/mail
```

### Step 5: Create Environment Variables

Create/update `.env` file:

```env
# SendGrid Configuration
SENDGRID_API_KEY=SG.your-api-key-here
SENDGRID_FROM_EMAIL=your-verified-email@example.com
SENDGRID_TO_EMAIL=your-email@example.com
```

**Replace**:
- `SG.your-api-key-here` with your actual API key from Step 2
- `your-verified-email@example.com` with the email you verified in Step 3

### Step 6: Create Email Service (Backend)

Create a new file: `server/emailService.ts`

```typescript
import sgMail from '@sendgrid/mail';

interface EmailData {
  parentName: string;
  parentEmail: string;
  phoneNumber: string;
  childGrade: string;
  subjectInterest: string;
  message?: string;
}

// Set API key
const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  console.error('SENDGRID_API_KEY is not set in environment variables');
} else {
  sgMail.setApiKey(apiKey);
  console.log('✅ SendGrid initialized successfully');
}

export async function sendBookingEmail(data: EmailData) {
  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">New Trial Class Booking Request</h2>

      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Parent/Guardian Information:</h3>
        <ul style="line-height: 1.8;">
          <li><strong>Name:</strong> ${data.parentName}</li>
          <li><strong>Email:</strong> ${data.parentEmail}</li>
          <li><strong>Phone:</strong> ${data.phoneNumber}</li>
        </ul>
      </div>

      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Student Information:</h3>
        <ul style="line-height: 1.8;">
          <li><strong>Grade:</strong> ${data.childGrade}</li>
          <li><strong>Subject Interest:</strong> ${data.subjectInterest}</li>
        </ul>
      </div>

      ${data.message ? `
      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Additional Message:</h3>
        <p style="line-height: 1.6;">${data.message}</p>
      </div>
      ` : ''}

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
      <p style="color: #6b7280; font-size: 12px; text-align: center;">
        This email was sent from the EduVerseJr website contact form.
      </p>
    </div>
  `;

  const msg = {
    to: process.env.SENDGRID_TO_EMAIL || '',
    from: process.env.SENDGRID_FROM_EMAIL || '',
    replyTo: data.parentEmail,
    subject: `New Trial Class Booking - ${data.subjectInterest}`,
    html: emailContent,
    text: `
      New Trial Class Booking Request

      Parent/Guardian: ${data.parentName}
      Email: ${data.parentEmail}
      Phone: ${data.phoneNumber}

      Student Grade: ${data.childGrade}
      Subject Interest: ${data.subjectInterest}

      ${data.message ? `Message: ${data.message}` : ''}
    `.trim(),
  };

  try {
    const response = await sgMail.send(msg);
    console.log('Email sent successfully via SendGrid');
    return { success: true, messageId: response[0].headers['x-message-id'] };
  } catch (error: any) {
    console.error('SendGrid error:', error.response?.body || error);
    throw error;
  }
}
```

### Step 7: Update Server with Email Endpoint

Use the same server update as shown in **Option 1, Step 5** above.

### Step 8: Update Frontend Form

Use the same frontend update as shown in **Option 1, Step 6** above.

---

## Option 3: Formspree

**Best for**: Quick setup, no backend coding, hobby projects

### Setup Steps:

1. Go to https://formspree.io/
2. Sign up for a free account (50 submissions/month)
3. Create a new form
4. Copy your form endpoint (looks like: `xyzabc123`)
5. Update `BookingForm.tsx`:

```typescript
<BookingForm formspreeEndpoint="xyzabc123" />
```

**Pros**:
- No backend code needed
- Easy setup
- Handles spam protection

**Cons**:
- Limited free tier (50 emails/month)
- Less customization
- Dependent on third-party service

---

## Security Best Practices

### 1. Environment Variables

**NEVER commit `.env` file to Git!**

Add to `.gitignore`:
```
.env
.env.local
.env.production
```

### 2. For GitHub Pages Deployment

Since GitHub Pages is static hosting, you need to:

**Option A**: Deploy your Express server separately
- Deploy backend to: Heroku, Railway, Render, DigitalOcean, AWS, etc.
- Update frontend to point to your backend URL:
  ```typescript
  const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://your-backend.herokuapp.com'
    : '';

  fetch(`${API_URL}/api/send-booking`, { ... })
  ```

**Option B**: Use serverless functions
- Use Netlify/Vercel instead of GitHub Pages (they support serverless functions)
- Convert email endpoint to serverless function

**Option C**: Keep using Formspree
- No backend deployment needed
- Works with static hosting

### 3. Rate Limiting

Add rate limiting to prevent spam:

```bash
npm install express-rate-limit
```

Update `server/index.ts`:

```typescript
import rateLimit from 'express-rate-limit';

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests, please try again later.',
});

app.post("/api/send-booking", emailLimiter, async (req, res) => {
  // ... email logic
});
```

### 4. Input Validation

The form already has Zod validation on the frontend, but add backend validation too:

```typescript
app.post("/api/send-booking", async (req, res) => {
  // Validate required fields
  const { parentName, parentEmail, phoneNumber, childGrade, subjectInterest } = req.body;

  if (!parentName || !parentEmail || !phoneNumber || !childGrade || !subjectInterest) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(parentEmail)) {
    return res.status(400).json({ success: false, message: 'Invalid email address' });
  }

  // Continue with email sending...
});
```

---

## Testing Your Email Setup

### 1. Local Testing

```bash
# Install dependencies
npm install

# Set environment variables in .env file

# Run development server
npm run dev

# Test the form at http://localhost:5173
```

### 2. Test Checklist

- [ ] Fill out the booking form completely
- [ ] Submit and check for success message
- [ ] Check your email inbox (also spam folder)
- [ ] Verify all form data appears correctly in email
- [ ] Test "Reply" - it should reply to the customer's email
- [ ] Test error handling (disconnect internet, submit form)
- [ ] Test with invalid email address
- [ ] Test with missing required fields

### 3. Common Issues

**Email not received?**
- Check spam/junk folder
- Verify sender email is correct in `.env`
- Check server console for errors
- For Gmail: Check if app password is correct
- For SendGrid: Verify sender email is authenticated

**"Invalid credentials" error?**
- Gmail: Regenerate app password
- SendGrid: Verify API key is correct and has mail.send permission

**CORS errors?**
- Ensure frontend and backend are on same domain, OR
- Add CORS middleware to Express server

---

## Deployment Recommendations

| Hosting | Best Email Option | Notes |
|---------|------------------|-------|
| **GitHub Pages** | Formspree or separate backend | Static hosting only, needs external backend |
| **Vercel** | SendGrid with serverless | Built-in API routes support |
| **Netlify** | SendGrid with functions | Easy serverless function setup |
| **Heroku/Railway** | Gmail SMTP or SendGrid | Full backend support, free tiers available |

---

## Next Steps

1. Choose your email provider (Gmail SMTP or SendGrid)
2. Follow the setup steps for your chosen option
3. Test locally with the checklist above
4. Deploy your backend (if not using Formspree)
5. Update frontend to point to production backend URL
6. Test on production site

---

## Need Help?

Common commands:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run check
```

If you encounter issues, check:
1. Server console logs for errors
2. Browser console for network errors
3. Email service dashboard for delivery logs
4. `.env` file has correct values

---

**Created**: January 2, 2026
**For**: EduVerseJr Website
**Contact Form**: `client/src/components/BookingForm.tsx`
