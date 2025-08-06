"use client";

import PrimaryButton from "./buttons/PrimaryButtons";

interface NewsLetterProps {
  getCardClasses: () => string;
  getHeadingClasses: () => string;
  getTextClasses: () => string;
  getInputClasses: () => string;
  getContainerClasses: () => string;
  theme: string;
  getButtonClasses: () => string;
}

const NewsLetter = ({
  getCardClasses,
  getHeadingClasses,
  getInputClasses,
  getTextClasses,
  getButtonClasses,
  theme,
  getContainerClasses,
}: NewsLetterProps) => {
  return (
    <section className="py-16">
      <div className={getContainerClasses()}>
        <div className={`${getCardClasses()} p-8 lg:p-12 text-center`}>
          <h2
            className={`${getHeadingClasses()} font-bold mb-6 ${
              theme === "theme3"
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-2xl sm:text-3xl lg:text-4xl"
            }`}
          >
            Stay Connected
          </h2>
          <p
            className={`${getTextClasses()} max-w-3xl mx-auto mb-8 leading-relaxed ${
              theme === "theme3" ? "text-lg" : "text-base"
            }`}
          >
            Subscribe to our newsletter for the latest updates, product
            announcements, and exclusive insights from our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 ${getInputClasses()}`}
            />
            <PrimaryButton getButtonClasses={getButtonClasses} disabled={false}>
              Subscribe
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
