const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1593564127855-ff4bad6ceb92?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 15+ years in tech industry, passionate about creating meaningful user experiences.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Technical genius behind our innovative platform, specializing in scalable architecture and modern web technologies.",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Creative director with an eye for beautiful, functional design that prioritizes user experience above all.",
    social: { linkedin: "#", dribbble: "#" },
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack developer passionate about clean code, performance optimization, and cutting-edge technologies.",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Strategic thinker who bridges the gap between user needs and business objectives with data-driven decisions.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "James Wilson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Growth expert who helps connect our amazing products with the people who need them most.",
    social: { linkedin: "#", twitter: "#" },
  },
];

const values = [
  {
    icon: "🚀",
    title: "Innovation First",
    description:
      "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that exceed expectations.",
  },
  {
    icon: "🤝",
    title: "Customer Focused",
    description:
      "Every decision we make starts with our customers. Their success is our success, and we never forget that.",
  },
  {
    icon: "🌱",
    title: "Sustainable Growth",
    description:
      "We believe in building for the long term, creating sustainable value for all our stakeholders.",
  },
  {
    icon: "🎯",
    title: "Quality Excellence",
    description:
      "We never compromise on quality. Every product, service, and interaction reflects our commitment to excellence.",
  },
  {
    icon: "🌟",
    title: "Transparency",
    description:
      "Open communication and honest relationships form the foundation of everything we do.",
  },
  {
    icon: "💡",
    title: "Continuous Learning",
    description:
      "We embrace change, learn from failures, and continuously evolve to stay ahead of the curve.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Started with a vision to revolutionize the e-commerce experience through innovative design.",
  },
  {
    year: "2021",
    title: "1K+ Customers",
    description:
      "Reached our first major milestone with over 1,000 satisfied customers worldwide.",
  },
  {
    year: "2022",
    title: "Series A Funding",
    description:
      "Secured $5M in Series A funding to accelerate product development and team growth.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Expanded operations to serve customers across 25+ countries with localized experiences.",
  },
  {
    year: "2024",
    title: "50K+ Users",
    description:
      "Growing community of over 50,000 active users trusting our platform for their needs.",
  },
];

const contactMethods = [
  {
    icon: "📧",
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours.",
    contact: "hello@themeapp.com",
    action: "mailto:hello@themeapp.com",
  },
  {
    icon: "📞",
    title: "Visit Us",
    description: "Come visit our office for a face-to-face conversation.",
    contact: "123 Business Ave, Suite 100\nNew York, NY 10001",
    action: "#",
  },
  {
    icon: "📍",
    title: "Call Us",
    description: "Speak directly with our team during business hours.",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: "💬",
    title: "Live Chat",
    description: "Get instant help through our live chat support.",
    contact: "Available 9 AM - 6 PM EST",
    action: "#",
  },
];

const officeLocations = [
  {
    city: "New York",
    address: "123 Business Ave, Suite 100\nNew York, NY 10001",
    phone: "+1 (555) 123-4567",
    zip: "New York, NY 10001",
    email: "newyork@multiple.com",
    hours: "Mon-Fri: 9 AM - 6 PM EST",
  },
  {
    city: "San Francisco",
    address: "456 Tech Street, Floor 5\nSan Francisco, CA 94105",
    phone: "+1 (555) 987-6543",
    zip: "San Francisco, CA 94105",
    email: "sanfran@multiple.com",
    hours: "Mon-Fri: 9 AM - 6 PM PST",
  },
  {
    city: "London",
    address: "789 Innovation Road\nLondon, UK EC1A 1BB",
    phone: "+44 20 1234 5678",
    zip: "London, UK EC1A 1BB",
    email: "london@multiple.com",

    hours: "Mon-Fri: 9 AM - 6 PM GMT",
  },
  {
    city: "Tokyo",
    address: "101 Tech Plaza, 2nd Floor\nTokyo, Japan 100-0001",
    phone: "+81 3 1234 5678",
    zip: "Tokyo, Japan 100-0001",
    email: "tokyo@multiple.com",
    hours: "Mon-Fri: 9 AM - 6 PM JST",
  },
];

const faqs = [
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
  },
  {
    question: "Do you offer custom development services?",
    answer:
      "Yes! We offer custom development services tailored to your specific needs. Contact us to discuss your project requirements.",
  },
  {
    question: "What support channels do you provide?",
    answer:
      "We offer email support, live chat, phone support, and comprehensive documentation to help you succeed.",
  },
  {
    question: "Can I schedule a demo or consultation?",
    answer:
      "Absolutely! We'd be happy to show you our platform and discuss how it can benefit your business. Use the form to request a demo.",
  },
];

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "📖" },
  { href: "/products", label: "Products", icon: "🛍️" },
  { href: "/contact", label: "Contact", icon: "📧" },
];

const categoryItems = [
  { href: "#", label: "Electronics" },
  { href: "#", label: "Clothing" },
  { href: "#", label: "Books" },
];

export {
  teamMembers,
  values,
  milestones,
  contactMethods,
  officeLocations,
  faqs,
  navItems,
  categoryItems,
};
