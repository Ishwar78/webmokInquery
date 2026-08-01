import { ArrowRight, CheckCircle2, MessageCircle, TriangleAlert } from "lucide-react";
import { useMemo, useState } from "react";
import { EVENT } from "../../data/masterclassData";
import { buildPaidRegistrationMessage, shareToWhatsAppWithOptionalFile } from "../../utils/whatsapp";
import "./FormShared.css";

const initialState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  profile: "",
  paymentMode: "UPI / QR Payment",
  transactionId: "",
  paymentScreenshot: null,
  note: "",
};

export default function PaidRegistrationForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });

  const screenshotName = useMemo(() => form.paymentScreenshot?.name || "", [form.paymentScreenshot]);

  function handleChange(event) {
    const { name, value, files } = event.target;

    if (name === "paymentScreenshot") {
      setForm((prev) => ({ ...prev, paymentScreenshot: files?.[0] || null }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!form.transactionId.trim() && !form.paymentScreenshot) {
      setStatus({
        type: "error",
        message: "Transaction ID ya payment screenshot dono mein se kam se kam ek provide karna zaroori hai.",
      });
      return;
    }

    const message = buildPaidRegistrationMessage(form, EVENT);
    const result = await shareToWhatsAppWithOptionalFile(
      EVENT.whatsappNumber,
      message,
      form.paymentScreenshot
    );

    if (result.mode === "cancelled") {
      setStatus({ type: "error", message: "Share cancel ho gaya. Dubara try karo." });
      return;
    }

    if (result.mode === "fallback") {
      setStatus({
        type: "success",
        message:
          "WhatsApp message open ho gaya hai. Aapke browser ne screenshot direct share support nahi kiya, isliye screenshot ko manually attach karke send kar dein.",
      });
    } else {
      setStatus({
        type: "success",
        message:
          "Registration flow ready hai. WhatsApp share/message open ho gaya hai. Final send WhatsApp se complete kar dein.",
      });
    }

    setForm(initialState);
  }

  return (
    <form className="wm-form-card" onSubmit={handleSubmit}>
      <div className="wm-form-head">
        <span>Paid Registration</span>
        <h3>Confirm Your Paid Seat</h3>
        <p>
          QR / UPI se payment karke neeche details submit karo. Transaction ID ya screenshot dono mein se ek
          mandatory hai.
        </p>
      </div>

      <div className="wm-form-grid">
        <div className="wm-form-field">
          <label htmlFor="paid-name">Full Name</label>
          <input id="paid-name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" required />
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-phone">Mobile Number</label>
          <input id="paid-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your mobile number" required />
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-email">Email Address</label>
          <input id="paid-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-city">City</label>
          <input id="paid-city" name="city" value={form.city} onChange={handleChange} placeholder="Enter your city" required />
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-profile">Profile</label>
          <select id="paid-profile" name="profile" value={form.profile} onChange={handleChange} required>
            <option value="">Select your profile</option>
            <option value="Student">Student</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Creator">Creator</option>
            <option value="Job Professional">Job Professional</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-payment-mode">Payment Mode</label>
          <select id="paid-payment-mode" name="paymentMode" value={form.paymentMode} onChange={handleChange} required>
            <option value="UPI / QR Payment">UPI / QR Payment</option>
            <option value="PhonePe">PhonePe</option>
            <option value="Google Pay">Google Pay</option>
            <option value="Paytm">Paytm</option>
            <option value="Other UPI App">Other UPI App</option>
          </select>
        </div>

        <div className="wm-form-field wm-form-field--full">
          <label htmlFor="paid-transaction-id">Transaction ID</label>
          <input id="paid-transaction-id" name="transactionId" value={form.transactionId} onChange={handleChange} placeholder="Enter transaction / UTR ID (optional if screenshot added)" />
        </div>
      </div>

      <div className="wm-form-divider">OR</div>

      <div className="wm-form-upload">
        <span>Upload Payment Screenshot</span>
        <input id="paid-screenshot" type="file" name="paymentScreenshot" accept="image/*" onChange={handleChange} />
        {screenshotName ? <div className="wm-form-file-name">Selected file: {screenshotName}</div> : null}
      </div>

      <div className="wm-form-field wm-form-field--full" style={{ marginTop: 16 }}>
        <label htmlFor="paid-note">Additional Note</label>
        <textarea id="paid-note" name="note" value={form.note} onChange={handleChange} placeholder="Any extra detail you want to share..." />
      </div>

      <div className="wm-form-note">
        <TriangleAlert size={18} />
        <div>
          <strong>Important:</strong> Supported mobile browsers mein screenshot direct share हो सकता है. Agar direct
          share support na ho to message WhatsApp par open hoga aur screenshot manually attach karna hoga.
        </div>
      </div>

      <button className="wm-primary-btn wm-form-submit" type="submit">
        <CheckCircle2 size={18} />
        Submit Paid Registration
        <ArrowRight size={18} />
      </button>

      <button
        type="button"
        className="wm-secondary-btn wm-form-submit"
        onClick={() =>
          shareToWhatsAppWithOptionalFile(
            EVENT.whatsappNumber,
            `Hello Webmok Team, I need help with paid registration for ${EVENT.title}.`,
            null
          )
        }
      >
        <MessageCircle size={18} />
        Need Help on WhatsApp
      </button>

      {status.message ? (
        <div className={`wm-form-status wm-form-status--${status.type}`}>{status.message}</div>
      ) : null}
    </form>
  );
}
