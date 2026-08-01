# Webmok Masterclass Landing Page

Premium, responsive React + Vite landing page for the **22 August 2026, 3-hour offline Video Editing & Digital Marketing Masterclass**.

## Included

- Premium hero with event information and enquiry form
- Course benefits, learning flow, target audience and venue sections
- Separate paid registration section
- QR code area and mobile UPI deep link
- Transaction ID and payment screenshot upload
- Responsive sticky CTA on mobile
- API-ready enquiry and registration submissions
- LocalStorage demo mode when API URL is not configured

## Start

```bash
npm install
cp .env.example .env
npm run dev
```

## Important configuration

Edit `.env` before production:

- `VITE_API_URL`
- `VITE_EVENT_TIME`
- `VITE_EVENT_FEE`
- `VITE_EVENT_VENUE`
- `VITE_UPI_ID`
- `VITE_UPI_PAYEE`
- `VITE_QR_IMAGE`
- Contact and WhatsApp numbers

Replace `public/payment-qr-placeholder.svg` with the real payment QR image, or update `VITE_QR_IMAGE`.

## Expected backend endpoints

### 1. Enquiry

`POST /api/event/inquiry`

JSON fields:

- name
- phone
- email
- city
- profile
- goal
- eventName
- eventDate

### 2. Paid registration

`POST /api/event/register`

`multipart/form-data` fields:

- name
- phone
- email
- amount
- paymentMode
- transactionId
- consent
- eventName
- eventDate
- paymentScreenshot

## Production note

Payment screenshots and transaction IDs must be verified on the server/admin side. Do not confirm a seat only from a frontend success message.
