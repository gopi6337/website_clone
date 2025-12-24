# Formspree Email Configuration Guide

This guide will help you set up email notifications for the trial class booking form on your website.

## What is Formspree?

Formspree is a form backend service that allows your booking form to send emails without needing a backend server. It's free for up to 50 submissions per month.

## Step-by-Step Setup Instructions

### 1. Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **"Sign Up"** (top right corner)
3. Create an account using:
   - Email address (use your business email)
   - Or sign up with Google/GitHub

### 2. Create a New Form

1. After logging in, click **"+ New Form"** button
2. Give your form a name: `Trial Class Booking` or `EduVerseJr Booking`
3. Click **"Create Form"**

### 3. Get Your Form Endpoint

1. After creating the form, you'll see your **Form Endpoint**
2. It looks like: `https://formspree.io/f/xxxXXXxxx`
3. Copy the part after `/f/` - this is your **Form ID** (e.g., `mwpklrgq`)

### 4. Configure Your Website

1. Open the `.env` file in your project root directory
2. Replace `YOUR_FORMSPREE_ENDPOINT_HERE` with your Form ID:
   ```
   VITE_FORMSPREE_ENDPOINT=mwpklrgq
   ```
   (Replace `mwpklrgq` with your actual Form ID)
3. Save the file

### 5. Configure Email Settings (Optional but Recommended)

In your Formspree dashboard, you can customize:

1. **Email Notifications**
   - Set where booking emails should be sent
   - Add multiple email addresses if needed

2. **Reply-To Address**
   - Configure so you can reply directly to parents

3. **Auto-Response**
   - Enable to send automatic confirmation to parents
   - Customize the message

4. **Spam Protection**
   - Already enabled by default
   - Add reCAPTCHA if needed

### 6. Test Your Form

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to your booking section
3. Fill out the form with test data
4. Submit the form
5. Check your email for the booking notification

### 7. Deploy to Production

When deploying to GitHub Pages, add the environment variable:

1. Go to your repository settings
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **"New repository secret"**
4. Name: `VITE_FORMSPREE_ENDPOINT`
5. Value: Your Formspree Form ID
6. Click **"Add secret"**

Then update your `.github/workflows/deploy.yml` to include the environment variable during build.

## Email Template Example

When someone books a trial class, you'll receive an email like:

```
Subject: New Trial Class Booking - Mathematics

Parent/Guardian Name: John Doe
Email: john.doe@example.com
Phone: +1 (555) 123-4567
Child's Grade: Grade 7
Subject: Mathematics
Message: Looking forward to improving my child's math skills!
```

## Troubleshooting

### Form not submitting?
- Check that `.env` file has the correct Form ID
- Restart your development server after changing `.env`
- Check browser console for errors

### Not receiving emails?
- Verify the email address in Formspree dashboard
- Check spam/junk folder
- Confirm the form was submitted successfully (you should see a success message)

### Rate Limit Exceeded?
- Free plan: 50 submissions/month
- Upgrade to paid plan if needed ($10/month for 1,000 submissions)

## Support

- Formspree Documentation: [https://help.formspree.io/](https://help.formspree.io/)
- Contact Formspree Support: [https://formspree.io/support](https://formspree.io/support)

---

**Important Security Note:**
- Never commit your `.env` file to GitHub
- The `.env` file is already in `.gitignore`
- Only share your Form ID in secure environments
