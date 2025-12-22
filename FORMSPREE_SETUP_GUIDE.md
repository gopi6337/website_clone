# Formspree Setup Guide - EduVerseJr Booking Form

## 📧 Email Notification Setup for Static Hosting

Your website now includes a **Trial Class Booking Form** that sends email notifications via Formspree. Follow these steps to set it up:

---

## 🚀 Step 1: Create Formspree Account

1. Go to **[Formspree.io](https://formspree.io/)**
2. Click **"Sign Up"** (top right)
3. Create a free account with your email
   - Free tier: **50 submissions/month**
   - No credit card required

---

## 📝 Step 2: Create a New Form

1. After logging in, click **"+ New Form"**
2. **Form Name**: `EduVerseJr Trial Class Bookings`
3. Click **"Create Form"**

---

## 🔑 Step 3: Get Your Form Endpoint

After creating the form, you'll see:

```
Your form's endpoint is:
https://formspree.io/f/YOUR_FORM_ID
```

**Example:** `https://formspree.io/f/xyzabc123`

Copy the **form ID** (the part after `/f/`, e.g., `xyzabc123`)

---

## ⚙️ Step 4: Configure Form Settings

In your Formspree dashboard, configure these settings:

### **Email Settings**
1. Go to **"Settings"** → **"Email"**
2. **Email To**: Enter your admin email (where you want to receive bookings)
   - Example: `admin@eduversejr.com`
3. **Subject Line**: Leave default or customize
4. Click **"Save"**

### **Notification Settings** (Optional but Recommended)
1. Go to **"Settings"** → **"Notifications"**
2. Enable **"Email Notifications"**
3. Enable **"Success Redirect"** (optional)
4. Enable **"reCAPTCHA"** for spam protection (optional)

### **Auto-Reply** (Optional)
1. Go to **"Settings"** → **"Auto Reply"**
2. Enable auto-reply to send confirmation to parents
3. Example message:
   ```
   Thank you for booking a FREE trial class with EduVerseJr!

   We've received your request and our team will contact you within 24 hours
   to schedule your personalized trial session.

   If you have any immediate questions, feel free to reply to this email.

   Best regards,
   The EduVerseJr Team
   ```

---

## 🔧 Step 5: Update Your Website Code

### **Option A: Update the Component File** (Recommended)

Open `client/src/components/BookingForm.tsx` and update line 26:

**Before:**
```tsx
formspreeEndpoint = "YOUR_FORMSPREE_ENDPOINT"
```

**After:**
```tsx
formspreeEndpoint = "xyzabc123"  // Replace with your actual form ID
```

### **Option B: Pass as Prop in Home.tsx**

If you want to keep it flexible, update `client/src/components/BookingSection.tsx`:

```tsx
// Line 41 - Update this:
<BookingForm formspreeEndpoint="xyzabc123" />
```

---

## 🧪 Step 6: Test Your Form

1. **Start the development server:**
   ```bash
   pnpm dev
   ```

2. **Open your browser:**
   ```
   http://localhost:3000
   ```

3. **Scroll to the "Book Your FREE Trial Class" section**

4. **Fill out the test form:**
   - Parent Name: Test User
   - Email: your-test-email@example.com
   - Phone: +1 (555) 123-4567
   - Grade: Grade 5
   - Subject: Math
   - Message: This is a test submission

5. **Click "Book FREE Trial Class"**

6. **Check for success message:**
   - You should see a green success message
   - Check your admin email (specified in Formspree settings)
   - You should receive the booking details

---

## 📊 Step 7: View Submissions

1. Go to your **Formspree Dashboard**
2. Click on **"EduVerseJr Trial Class Bookings"** form
3. Click **"Submissions"** tab
4. You'll see all form submissions with details:
   - Parent Name
   - Email
   - Phone Number
   - Child's Grade
   - Subject Interest
   - Message
   - Submission date/time

---

## 🎯 What Parents Will See

### **Before Submission:**
- Clean, professional booking form
- All required fields marked with *
- Grade selector (5-10)
- Subject selector (Math/Coding/Both)
- Optional message field

### **During Submission:**
- Loading spinner
- "Submitting..." text on button
- Form fields disabled

### **After Successful Submission:**
- ✅ Green success message
- "Thank You!" heading
- Confirmation text
- Message disappears after 5 seconds
- Form resets for next user

### **If Submission Fails:**
- ❌ Red error message
- Clear error text
- Form remains filled (can retry)

---

## 🔒 Security & Spam Protection

### **Enable reCAPTCHA** (Recommended)
1. In Formspree dashboard → **"Settings"** → **"Spam Protection"**
2. Enable **"reCAPTCHA v3"**
3. No additional code needed - Formspree handles it

### **Enable Honeypot** (Already Included)
Formspree automatically includes honeypot spam protection.

### **Email Verification**
Formspree requires email verification for the receiving email address.

---

## 📈 Monitoring & Analytics

### **View Submission Stats:**
1. Formspree Dashboard → Your Form
2. Click **"Analytics"** tab
3. View:
   - Total submissions
   - Submissions over time
   - Spam blocked
   - Success rate

### **Export Submissions:**
1. Go to **"Submissions"** tab
2. Click **"Export CSV"**
3. Download all booking data

---

## 🚨 Troubleshooting

### **Form not submitting?**
- ✅ Check if form ID is correct in `BookingForm.tsx`
- ✅ Check browser console for errors (F12)
- ✅ Verify you're using the correct endpoint format

### **Not receiving emails?**
- ✅ Check Formspree dashboard for submissions
- ✅ Verify email address in Formspree settings
- ✅ Check spam/junk folder
- ✅ Confirm email verification in Formspree

### **Getting spam submissions?**
- ✅ Enable reCAPTCHA in Formspree settings
- ✅ Enable email verification
- ✅ Set up custom spam filters in Formspree

---

## 💰 Pricing & Limits

### **Free Tier:**
- ✅ 50 submissions/month
- ✅ Unlimited forms
- ✅ Email notifications
- ✅ Basic spam protection
- ✅ File uploads (up to 10MB)

### **Paid Tiers (if you need more):**
- **Gold ($10/month)**: 1,000 submissions/month
- **Platinum ($40/month)**: 10,000 submissions/month
- **Custom**: Contact for higher volume

**For most small-medium websites, the FREE tier is sufficient!**

---

## 🎨 Customization Options

### **Change Form Colors:**
Update colors in `client/src/components/BookingSection.tsx` and `BookingForm.tsx`

### **Add More Fields:**
Edit `client/src/components/BookingForm.tsx`:
1. Add field to Zod schema
2. Add input component in form
3. Formspree automatically captures it

### **Change Success Message:**
Edit `BookingForm.tsx` around line 77

### **Change Button Text:**
Edit `BookingForm.tsx` around line 227

---

## 📞 Support

### **Formspree Support:**
- Documentation: https://help.formspree.io/
- Email: support@formspree.io

### **For Code Issues:**
Check your console logs and ensure all dependencies are installed:
```bash
pnpm install
```

---

## ✅ Final Checklist

Before going live:

- [ ] Created Formspree account
- [ ] Created form and got form ID
- [ ] Updated `BookingForm.tsx` with correct form ID
- [ ] Set admin email in Formspree settings
- [ ] Enabled email notifications
- [ ] Set up auto-reply (optional)
- [ ] Enabled reCAPTCHA (recommended)
- [ ] Tested form submission locally
- [ ] Received test email successfully
- [ ] Checked spam folder settings
- [ ] Verified form works on mobile
- [ ] Ready to deploy!

---

## 🎉 You're All Set!

Your booking form is now ready to:
✅ Collect trial class bookings
✅ Send email notifications automatically
✅ Work on static hosting (Vercel, Netlify, etc.)
✅ Handle spam protection
✅ Provide great user experience

**Happy booking! 🚀**

---

**Last Updated:** 2025-12-22
**Next Step:** [Deploy to Vercel/Netlify](./NEXT_STEPS.md)
