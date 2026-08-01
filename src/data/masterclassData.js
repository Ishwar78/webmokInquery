import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  MapPin,
  MonitorPlay,
  Target,
  WandSparkles,
  Rocket,
  Laptop2,
  Sparkles,
  Video,
  Megaphone,
  PenTool,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

export const EVENT = {
  title: "Video Editing & Digital Marketing Masterclass",
  shortTitle: "Masterclass",
  date: import.meta.env.VITE_EVENT_DATE || "22 August 2026",
  time: import.meta.env.VITE_EVENT_TIME || "10:00 AM – 01:00 PM",
  duration: import.meta.env.VITE_EVENT_DURATION || "3 Hours Offline Session",
  venue:
    import.meta.env.VITE_EVENT_VENUE ||
    "Webmok Training Hub, 1st Floor, 129 L, Near Power House, Model Town, Rohtak, Haryana",
  fee: import.meta.env.VITE_EVENT_FEE || "199",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "917206720663",
  callNumber: import.meta.env.VITE_CALL_NUMBER || "7206720663",
  upiId: import.meta.env.VITE_UPI_ID || "8684031003@ptsbi",
  upiPayee: import.meta.env.VITE_UPI_PAYEE || "Imt Web Mok Private Limited",
  qrImage: import.meta.env.VITE_QR_IMAGE || "assets/Qrcode.png",
};

export const marqueeItems = [
  `22 August • ${EVENT.title}`,
  `${EVENT.duration} • ${EVENT.time}`,
  "Limited Offline Seats Available",
  "Live Practical Demo + Real Strategies",
  "Rohtak Webmok Pvt.Ltd. Venue • Expert Mentors",
  `Helpline: ${EVENT.callNumber}`,
];

export const heroStats = [
  { label: "Offline Session", value: "03 Hrs" },
  { label: "Core Tracks", value: "02" },
  { label: "Seat Type", value: "Limited" },
];

export const quickHighlights = [
  { icon: CalendarDays, text: EVENT.date },
  { icon: Clock3, text: EVENT.time },
  { icon: MapPin, text: "Rohtak • Offline" },
  { icon: BadgeCheck, text: "Practical + Premium Experience" },
];

export const learningPoints = [
  // {
  //   icon: MonitorPlay,
  //   title: "Editing Workflow",
  //   description:
  //     "Timeline setup, raw footage sorting, cuts, pacing, captions aur final export workflow.",
  // },
  // {
  //   icon: WandSparkles,
  //   title: "AI Assisted Creativity",
  //   description:
  //     "Ideas, scripts, hooks aur productivity ke liye smart AI workflow ka practical use.",
  // },
  // {
  //   icon: Target,
  //   title: "Marketing Foundations",
  //   description:
  //     "Digital marketing ka base, content funnel, lead mindset aur audience understanding.",
  // },
  // {
  //   icon: Rocket,
  //   title: "Growth Thinking",
  //   description:
  //     "Content ko sirf good-looking nahi, enquiries aur conversions ke liye optimize karna.",
  // },
  // {
  //   icon: Laptop2,
  //   title: "Live Demo Session",
  //   description:
  //     "Trainer ke saath live practical देखकर exact process ko samajhna aur note karna.",
  // },
  // {
  //   icon: Sparkles,
  //   title: "Career Direction",
  //   description:
  //     "Students, freelancers aur business owners ke liye next-step clarity aur action plan.",
  // },
];

export const agendaCards = [
  {
    icon: Video,
    title: "Video Editing Mastery",
    items: [
      "Professional cut-to-cut editing",
      "Reels retention strategy",
      
      "Transitions without over-editing",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Basics",
    items: [
      "Audience targeting fundamentals",
      "Offer positioning that converts",
      
      "Social growth action plan",
    ],
  },
  {
    icon: PenTool,
    title: "Creative Execution",
    items: [
      "Hooks, scripting & content ideas",
    
      "Branding basics for social content",
      "AI tools to speed up work",
    ],
  },
];

export const schedule = [
  {
    step: "01",
    title: "Creative Setup & Strategy",
    text: "Content planning, creator mindset, tools setup aur high-retention content ki foundation.",
  },
  {
    step: "02",
    title: "Live Editing Practical",
    text: "Real sample footage par edit flow, captions, audio polish aur exporting process.",
  },
  {
    step: "03",
    title: "Marketing + Growth Plan",
    text: "Content ko growth aur enquiries se connect karne ka simple, practical roadmap.",
  },
];

export const audiencePoints = [
  "Students who want to learn digital skills",
  "Freelancers who want to deliver premium-quality work to their clients",
  "Business owners who want to improve their own content",
  "Creators who want to improve their reels and video quality",
  "Beginners who want to start from scratch",
  "Job professionals who want to explore the digital field",
];

export const perks = [
  { icon: TrendingUp, title: "Live Practical Learning" },
  { icon: Users, title: "Expert Mentor Guidance" },
  { icon: ShieldCheck, title: "Dedicated Offline Support" },
];

export const faqs = [
  {
    question: "Is this masterclass suitable for beginners?",
    answer:
      "Yes, this session is completely beginner-friendly. Even if you have never learned video editing or digital marketing before, you can easily join and follow the session.",
  },
  {
    question: "Is paid registration required?",
    answer:
      "Yes, due to limited offline seats, it is highly recommended to confirm your seat through the paid registration section. Our team will verify your details and share the final confirmation.",
  },
  {
    question: "What should I do if I do not have a Transaction ID?",
    answer:
      "The paid registration form requires you to provide either the Transaction ID or a payment screenshot. At least one of these details must be submitted for payment verification.",
  },
  {
    question: "How will the screenshot be sent to WhatsApp?",
    answer:
      "On supported mobile browsers, the payment screenshot can be shared directly through your device’s share option. On desktop computers or unsupported browsers, WhatsApp will open with the prepared message, and you can attach the screenshot manually.",
  },
];
