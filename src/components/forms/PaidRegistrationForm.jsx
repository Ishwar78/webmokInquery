import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  TriangleAlert,
} from "lucide-react";
import { useState } from "react";
import { EVENT } from "../../data/masterclassData";
import {
  buildPaidRegistrationMessage,
  openWhatsAppMessage,
} from "../../utils/whatsapp";
import "./FormShared.css";

const initialState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  profile: "",
  paymentMode: "UPI / QR Payment",
  transactionId: "",
  note: "",
};

export default function PaidRegistrationForm() {
  const [form, setForm] = useState(initialState);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setStatus({
      type: "",
      message: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (!form.name.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your full name.",
      });
      return;
    }

    if (!form.phone.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your mobile number.",
      });
      return;
    }

    if (!form.city.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your city.",
      });
      return;
    }

    if (!form.profile) {
      setStatus({
        type: "error",
        message: "Please select your profile.",
      });
      return;
    }

    if (!form.transactionId.trim()) {
      setStatus({
        type: "error",
        message:
          "Transaction/UTR ID mandatory hai. Payment ke baad received Transaction ID enter karein.",
      });
      return;
    }

    try {
      const message = buildPaidRegistrationMessage(form, EVENT);

      /*
       * EVENT.whatsappNumber ki fixed chat direct open hogi.
       * navigator.share use nahi ho raha.
       */
      openWhatsAppMessage(EVENT.whatsappNumber, message);
    } catch (error) {
      console.error("WhatsApp open error:", error);

      setStatus({
        type: "error",
        message:
          error?.message ||
          "WhatsApp open nahi ho paya. Please dubara try karein.",
      });
    }
  }

  function handleWhatsAppHelp() {
    try {
      const message = [
        "Hello Webmok Team,",
        "",
        `I need help with paid registration for ${EVENT.title}.`,
      ].join("\n");

      openWhatsAppMessage(EVENT.whatsappNumber, message);
    } catch (error) {
      console.error("WhatsApp help error:", error);

      setStatus({
        type: "error",
        message:
          error?.message ||
          "WhatsApp open nahi ho paya. Please dubara try karein.",
      });
    }
  }

  return (
    <form className="wm-form-card" onSubmit={handleSubmit}>
      <div className="wm-form-head">
        <span>Paid Registration</span>

        <h3>Confirm Your Paid Seat</h3>

        {/* <p>
          QR/UPI se payment karke neeche details submit karo.
          Transaction/UTR ID mandatory hai.
        </p> */}
      </div>

      <div className="wm-form-grid">
        <div className="wm-form-field">
          <label htmlFor="paid-name">
            Full Name
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="paid-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-phone">
            Mobile Number
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="paid-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            autoComplete="tel"
            inputMode="numeric"
            required
          />
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-email">Email Address</label>

          <input
            id="paid-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-city">
            City
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="paid-city"
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter your city"
            autoComplete="address-level2"
            required
          />
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-profile">
            Profile
            <span aria-hidden="true">*</span>
          </label>

          <select
            id="paid-profile"
            name="profile"
            value={form.profile}
            onChange={handleChange}
            required
          >
            <option value="">Select your profile</option>
            <option value="Student">Student</option>
            <option value="Freelancer">Freelancer</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Creator">Creator</option>
            <option value="Job Professional">
              Job Professional
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="wm-form-field">
          <label htmlFor="paid-payment-mode">
            Payment Mode
            <span aria-hidden="true">*</span>
          </label>

          <select
            id="paid-payment-mode"
            name="paymentMode"
            value={form.paymentMode}
            onChange={handleChange}
            required
          >
            <option value="UPI / QR Payment">
              UPI / QR Payment
            </option>
            <option value="PhonePe">PhonePe</option>
            <option value="Google Pay">Google Pay</option>
            <option value="Paytm">Paytm</option>
            <option value="Other UPI App">
              Other UPI App
            </option>
          </select>
        </div>

        <div className="wm-form-field wm-form-field--full">
          <label htmlFor="paid-transaction-id">
            Transaction / UTR ID
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="paid-transaction-id"
            type="text"
            name="transactionId"
            value={form.transactionId}
            onChange={handleChange}
            placeholder="Enter payment Transaction / UTR ID"
            autoComplete="off"
            required
          />

          <small className="wm-form-field__hint">
           After the payment is successful, enter the Transaction ID or UTR number received in your UPI application.
          </small>
        </div>
      </div>

      <div
        className="wm-form-field wm-form-field--full"
        style={{ marginTop: 16 }}
      >
        <label htmlFor="paid-note">
          Additional Note
        </label>

        <textarea
          id="paid-note"
          name="note"
          value={form.note}
          onChange={handleChange}
          placeholder="Any extra detail you want to share..."
          rows={5}
        />
      </div>

      {/* <div className="wm-form-note">
        <TriangleAlert size={18} />

        <div>
          <strong>Important:</strong> Transaction/UTR ID mandatory
          hai. Submit karte hi Webmok Team ka fixed WhatsApp number
          direct open hoga aur registration details message mein
          automatically filled hongi.
        </div>
      </div> */}

      <button
        className="wm-primary-btn wm-form-submit"
        type="submit"
      >
        <CheckCircle2 size={18} />
        Submit Paid Registration
        <ArrowRight size={18} />
      </button>

      <button
        type="button"
        className="wm-secondary-btn wm-form-submit"
        onClick={handleWhatsAppHelp}
      >
        <MessageCircle size={18} />
        Need Help on WhatsApp
      </button>

      {status.message ? (
        <div
          className={`wm-form-status wm-form-status--${status.type}`}
          role="alert"
        >
          {status.message}
        </div>
      ) : null}
    </form>
  );
}