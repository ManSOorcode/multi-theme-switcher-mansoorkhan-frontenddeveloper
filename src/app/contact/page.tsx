"use client";

import { useState } from "react";
import { useTheme } from "@/contextapi/ThemeContext";
import ContactCard from "@/components/contact/ContactCard";
import OfficeCard from "@/components/contact/OfficeCard";
import NewsLetter from "@/components/NewsLetter";
import { contactMethods, faqs, officeLocations } from "@/utils/data";
import PrimaryButton from "@/components/buttons/PrimaryButtons";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
}

const Page = () => {
  const {
    theme,
    themeConfig,
    getCardClasses,
    getButtonClasses,
    getHeadingClasses,
    getTextClasses,
  } = useTheme();

  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const getContainerClasses = () => {
    if (theme === "theme2") return "max-w-7xl mx-auto px-8";
    return "max-w-7xl mx-auto px-6";
  };

  const getGridClasses = () => {
    const base = "grid gap-6";
    if (theme === "theme2")
      return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`;
    if (theme === "theme3")
      return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`;
    return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`;
  };

  const getSectionSpacing = () => {
    return "space-y-16 lg:space-y-20";
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
        phone: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Submission error:", error.message);
      }

      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClasses = () => {
    return `w-full px-4 py-3 ${themeConfig.border} border ${themeConfig.borderRadius} ${themeConfig.text} ${themeConfig.bg} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${themeConfig.fontFamily}`;
  };

  return (
    <div className={`pt-20 pb-16 ${getSectionSpacing()}`}>
      {/* Hero section */}
      <section className="py-16 lg:py-24">
        <div className={getContainerClasses()}>
          <div className="max-w-5xl mx-auto text-center">
            <h1
              className={`${getHeadingClasses()} font-bold mb-6 leading-tight ${
                theme === "theme3"
                  ? "text-4xl sm:text-5xl lg:text-7xl"
                  : theme === "theme2"
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-4xl sm:text-5xl lg:text-6xl"
              }`}
            >
              Get in Touch
            </h1>

            <p
              className={`${getTextClasses()} mx-auto mb-8 leading-relaxed ${
                theme === "theme3"
                  ? "text-lg sm:text-xl lg:text-2xl max-w-4xl"
                  : "text-lg sm:text-xl max-w-3xl"
              }`}
            >
              {`Have questions, feedback, or want to explore how we can work
              together? We'd love to hear from you and help bring your ideas to
              life.`}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16">
        <div className={getContainerClasses()}>
          <div className="mb-12 text-center lg:mb-16">
            <h2
              className={`${getHeadingClasses()} font-bold mb-4 ${
                theme === "theme3"
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              }`}
            >
              How to Reach Us
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto leading-relaxed ${
                theme === "theme3" ? "text-lg lg:text-xl" : "text-lg"
              }`}
            >
              {`Choose the method that works best for you. We're here to help!`}
            </p>
          </div>

          <div className={getGridClasses()}>
            {contactMethods.map((method, index) => (
              <ContactCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                contact={method.contact}
                action={method.action}
                link={method.action}
                theme={theme}
                themeConfig={themeConfig}
                getCardClasses={getCardClasses}
                getHeadingClasses={getHeadingClasses}
                getTextClasses={getTextClasses}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and FAQs Section */}
      <section className="py-16">
        <div className={getContainerClasses()}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className={`${getCardClasses()} p-8 lg:p-12`}>
              <h2
                className={`${getHeadingClasses()} font-bold mb-6 ${
                  theme === "theme3"
                    ? "text-2xl sm:text-3xl lg:text-4xl"
                    : "text-2xl sm:text-3xl"
                }`}
              >
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div
                  className={`mb-6 p-4 ${themeConfig.borderRadius} bg-green-100 border border-green-300 text-green-800`}
                >
                  {`✅ Thank you! Your message has been sent successfully. We'll
                  get back to you soon.`}
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className={`mb-6 p-4 ${themeConfig.borderRadius} bg-red-100 border border-red-300 text-red-800`}
                >
                  ❌ Sorry, there was an error sending your message. Please try
                  again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block ${getTextClasses()} font-medium mb-2 text-sm`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className={getInputClasses()}
                    />
                  </div>

                  <div>
                    <label
                      className={`block ${getTextClasses()} font-medium mb-2 text-sm`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className={getInputClasses()}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block ${getTextClasses()} font-medium mb-2 text-sm`}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className={getInputClasses()}
                    />
                  </div>

                  <div>
                    <label
                      className={`block ${getTextClasses()} font-medium mb-2 text-sm`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className={getInputClasses()}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block ${getTextClasses()} font-medium mb-2 text-sm`}
                  >
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={getInputClasses()}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="partnership">Partnership</option>
                    <option value="demo">Request Demo</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`block ${getTextClasses()} font-medium mb-2 text-sm`}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project, questions, or how we can help..."
                    className={`${getInputClasses()} resize-vertical`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <PrimaryButton
                    getButtonClasses={getButtonClasses}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </PrimaryButton>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                        company: "",
                        phone: "",
                      })
                    }
                    className={`${themeConfig.textSecondary} ${themeConfig.border} border ${themeConfig.borderRadius} px-8 py-3 text-base font-medium transition-all duration-300 hover:${themeConfig.bgSecondary} hover:-translate-y-0.5 hover:shadow-lg`}
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>

            <div>
              <h2
                className={`${getHeadingClasses()} font-bold mb-8 ${
                  theme === "theme3"
                    ? "text-2xl sm:text-3xl lg:text-4xl"
                    : "text-2xl sm:text-3xl"
                }`}
              >
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className={`${getCardClasses()} p-6`}>
                    <h3
                      className={`${getHeadingClasses()} font-semibold mb-3 ${
                        theme === "theme3" ? "text-lg" : "text-base"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <p
                      className={`${getTextClasses()} leading-relaxed text-sm`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices Section */}
      <section className="py-16">
        <div className={getContainerClasses()}>
          <div className="mb-12 text-center lg:mb-16">
            <h2
              className={`${getHeadingClasses()} font-bold mb-4 ${
                theme === "theme3"
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              }`}
            >
              Our Offices
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto leading-relaxed ${
                theme === "theme3" ? "text-lg lg:text-xl" : "text-lg"
              }`}
            >
              Visit us at one of our locations around the world.
            </p>
          </div>

          <div className={getGridClasses()}>
            {officeLocations.map((office, index) => (
              <OfficeCard
                key={index}
                city={office.city}
                address={office.address}
                phone={office.phone}
                email={office.email}
                zip={office.zip}
                theme={theme}
                // themeConfig={themeConfig}
                getCardClasses={getCardClasses}
                getHeadingClasses={getHeadingClasses}
                getTextClasses={getTextClasses}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsLetter
        getCardClasses={getCardClasses}
        getHeadingClasses={getHeadingClasses}
        getTextClasses={getTextClasses}
        theme={theme}
        getContainerClasses={getContainerClasses}
        getInputClasses={getInputClasses}
        getButtonClasses={getButtonClasses}
      />
    </div>
  );
};

export default Page;
