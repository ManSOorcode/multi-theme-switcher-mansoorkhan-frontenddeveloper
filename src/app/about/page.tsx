"use client";

import Image from "next/image";
import { useTheme } from "@/contextapi/ThemeContext";
import PrimaryButton from "@/components/buttons/PrimaryButtons";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { milestones, teamMembers, values } from "@/utils/data";

const Page = () => {
  const {
    theme,
    themeConfig,
    getCardClasses,
    getButtonClasses,
    getHeadingClasses,
    getTextClasses,
  } = useTheme();

  const getContainerClasses = () => {
    if (theme === "theme2") return "max-w-7xl mx-auto px-8"; // Dark theme with more padding
    return "max-w-7xl mx-auto px-6";
  };

  const getGridClasses = () => {
    const base = "grid gap-6";
    if (theme === "theme2")
      return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`;
    if (theme === "theme3")
      return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`;
    return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`;
  };

  const getSectionSpacing = () => {
    return "space-y-16 lg:space-y-20";
  };

  return (
    <div className={`pt-20 pb-16 ${getSectionSpacing()}`}>
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
              About ThemeApp
            </h1>

            <p
              className={`${getTextClasses()} mx-auto mb-8 leading-relaxed ${
                theme === "theme3"
                  ? "text-lg sm:text-xl lg:text-2xl max-w-4xl"
                  : "text-lg sm:text-xl max-w-3xl"
              }`}
            >
              {` We're a passionate team dedicated to creating beautiful,
              functional, and user-centric digital experiences that make a
              difference in people's lives.`}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <PrimaryButton
                getButtonClasses={getButtonClasses}
                disabled={false}
              >
                Join Our Team
              </PrimaryButton>
              <SecondaryButton themeConfig={themeConfig}>
                Our Story
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className={getContainerClasses()}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div
              className={`${getCardClasses()} p-8 lg:p-12 text-center lg:text-left`}
            >
              <div
                className={`text-6xl mb-6 ${
                  theme === "theme3" ? "text-7xl" : ""
                }`}
              >
                🎯
              </div>
              <h2
                className={`${getHeadingClasses()} font-bold mb-6 ${
                  theme === "theme3"
                    ? "text-3xl sm:text-4xl lg:text-5xl"
                    : "text-2xl sm:text-3xl lg:text-4xl"
                }`}
              >
                Our Mission
              </h2>
              <p
                className={`${getTextClasses()} leading-relaxed ${
                  theme === "theme3" ? "text-lg" : "text-base"
                }`}
              >
                To empower businesses and individuals with innovative,
                beautiful, and accessible digital solutions that enhance their
                daily experiences. We believe technology should be intuitive,
                inclusive, and inspiring.
              </p>
            </div>

            <div
              className={`${getCardClasses()} p-8 lg:p-12 text-center lg:text-left`}
            >
              <div
                className={`text-6xl mb-6 ${
                  theme === "theme3" ? "text-7xl" : ""
                }`}
              >
                🌟
              </div>
              <h2
                className={`${getHeadingClasses()} font-bold mb-6 ${
                  theme === "theme3"
                    ? "text-3xl sm:text-4xl lg:text-5xl"
                    : "text-2xl sm:text-3xl lg:text-4xl"
                }`}
              >
                Our Vision
              </h2>
              <p
                className={`${getTextClasses()} leading-relaxed ${
                  theme === "theme3" ? "text-lg" : "text-base"
                }`}
              >
                To become the leading platform that bridges the gap between
                cutting-edge technology and human-centered design, creating a
                world where digital experiences are seamless, delightful, and
                meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              Our Values
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto leading-relaxed ${
                theme === "theme3" ? "text-lg lg:text-xl" : "text-lg"
              }`}
            >
              These core principles guide everything we do and shape the way we
              work together, serve our customers, and impact the world.
            </p>
          </div>

          <div className={getGridClasses()}>
            {values.map((value, index) => (
              <div
                key={index}
                className={`${getCardClasses()} group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 lg:p-8 text-center`}
              >
                <div
                  className={`mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    theme === "theme3"
                      ? "text-5xl lg:text-6xl"
                      : "text-4xl lg:text-5xl"
                  }`}
                >
                  {value.icon}
                </div>
                <h3
                  className={`${getHeadingClasses()} font-semibold mb-3 ${
                    theme === "theme3"
                      ? "text-xl lg:text-2xl"
                      : "text-lg lg:text-xl"
                  }`}
                >
                  {value.title}
                </h3>
                <p
                  className={`${getTextClasses()} leading-relaxed text-sm lg:text-base`}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Our Journey
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto leading-relaxed ${
                theme === "theme3" ? "text-lg lg:text-xl" : "text-lg"
              }`}
            >
              From a small startup to a growing company, here are the key
              milestones that have shaped our story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full ${themeConfig.primary}`}
            ></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${themeConfig.primary} rounded-full border-4 ${themeConfig.bg} z-10`}
                  ></div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className={`${getCardClasses()} p-6 lg:p-8`}>
                      <div
                        className={`${getHeadingClasses()} font-bold text-2xl lg:text-3xl mb-2 ${themeConfig.primary.replace(
                          "bg-",
                          "text-"
                        )}`}
                      >
                        {milestone.year}
                      </div>
                      <h3
                        className={`${getHeadingClasses()} font-semibold mb-3 ${
                          theme === "theme3" ? "text-xl" : "text-lg"
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className={`${getTextClasses()} leading-relaxed text-sm lg:text-base`}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              Meet Our Team
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto leading-relaxed ${
                theme === "theme3" ? "text-lg lg:text-xl" : "text-lg"
              }`}
            >
              Talented individuals who are passionate about creating exceptional
              experiences and driving innovation forward.
            </p>
          </div>

          <div className={getGridClasses()}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`${getCardClasses()} group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 lg:p-8 text-center`}
              >
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 96px, 128px"
                  />
                </div>

                <h3
                  className={`${getHeadingClasses()} font-semibold mb-1 ${
                    theme === "theme3" ? "text-xl" : "text-lg"
                  }`}
                >
                  {member.name}
                </h3>

                <p
                  className={`${themeConfig.primary.replace(
                    "bg-",
                    "text-"
                  )} font-medium mb-3 text-sm`}
                >
                  {member.role}
                </p>

                <p
                  className={`${getTextClasses()} leading-relaxed text-sm mb-4`}
                >
                  {member.bio}
                </p>

                <div className="flex justify-center gap-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className={`w-8 h-8 rounded-full ${themeConfig.bgSecondary} flex items-center justify-center ${themeConfig.textSecondary} hover:${themeConfig.primary} hover:text-white transition-all duration-300`}
                    >
                      {platform === "linkedin" && "in"}
                      {platform === "twitter" && "tw"}
                      {platform === "github" && "gh"}
                      {platform === "dribbble" && "dr"}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className={getContainerClasses()}>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {[
              {
                stat: "50K+",
                label: "Happy Users",
                description: "Trust our platform daily",
              },
              {
                stat: "99.9%",
                label: "Uptime",
                description: "Reliable service guarantee",
              },
              {
                stat: "25+",
                label: "Countries",
                description: "Global reach and impact",
              },
              {
                stat: "4.9/5",
                label: "Rating",
                description: "Customer satisfaction score",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className={`${getHeadingClasses()} font-bold mb-2 ${
                    theme === "theme3"
                      ? "text-4xl lg:text-5xl"
                      : "text-3xl lg:text-4xl"
                  } ${themeConfig.primary.replace("bg-", "text-")}`}
                >
                  {item.stat}
                </div>
                <p
                  className={`${getHeadingClasses()} font-semibold mb-1 ${
                    theme === "theme3" ? "text-lg" : "text-base"
                  }`}
                >
                  {item.label}
                </p>
                <p className={`${getTextClasses()} text-sm`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Join Us?
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto mb-8 leading-relaxed ${
                theme === "theme3" ? "text-lg" : "text-base"
              }`}
            >
              {` Whether you're looking to join our team, partner with us, or
              simply want to learn more about what we do, we'd love to hear from
              you.`}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <PrimaryButton
                getButtonClasses={getButtonClasses}
                disabled={false}
              >
                View Open Positions
              </PrimaryButton>
              <SecondaryButton themeConfig={themeConfig}>
                Contact Us
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
