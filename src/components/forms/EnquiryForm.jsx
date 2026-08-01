import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { EVENT } from "../../data/masterclassData";
import { buildInquiryMessage, openWhatsAppMessage } from "../../utils/whatsapp";
import "./FormShared.css";

const initialState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  profile: "",
  goal: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = buildInquiryMessage(form, EVENT.title, EVENT.date);
    openWhatsAppMessage(EVENT.whatsappNumber, message);
    setStatus({
      type: "success",
      message: "WhatsApp enquiry open ho gayi hai. Agar app install hai to aap direct message send kar sakte ho.",
    });
    setForm(initialState);
  }

  return (
    <form className="wm-form-card" onSubmit={handleSubmit}>
      <div className="wm-form-head">
        <span>Enquiry Form</span>
        <h3>Free Enquiry / Seat Interest</h3>
        <p>
          Is form se aap interest submit kar sakte ho. Submit karte hi WhatsApp par ready message open ho
          jayega.
        </p>
      </div>

      <div className="wm-form-grid">
        <div className="wm-form-field">
          <label htmlFor="inquiry-name">Full Name</label>
          <input id="inquiry-name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" required />
        </div>

        <div className="wm-form-field">
          <label htmlFor="inquiry-phone">Mobile Number</label>
          <input id="inquiry-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your mobile number" required />
        </div>

        <div className="wm-form-field">
          <label htmlFor="inquiry-email">Email Address</label>
          <input id="inquiry-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
        </div>

        <div className="wm-form-field">
          <label htmlFor="inquiry-city">City</label>
          <input id="inquiry-city" name="city" value={form.city} onChange={handleChange} placeholder="Enter your city" required />
        </div>

        <div className="wm-form-field">
          <label htmlFor="inquiry-profile">Profile</label>
          <select id="inquiry-profile" name="profile" value={form.profile} onChange={handleChange} required>
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
          <label htmlFor="inquiry-goal">What do you want to learn?</label>
          <input id="inquiry-goal" name="goal" value={form.goal} onChange={handleChange} placeholder="Example: Reels editing, digital marketing basics" required />
        </div>
      </div>

      <button className="wm-primary-btn wm-form-submit" type="submit">
        <MessageCircle size={18} />
        Send Enquiry on WhatsApp
        <ArrowRight size={18} />
      </button>

      {status.message ? (
        <div className={`wm-form-status wm-form-status--${status.type}`}>{status.message}</div>
      ) : null}
    </form>
  );
}
