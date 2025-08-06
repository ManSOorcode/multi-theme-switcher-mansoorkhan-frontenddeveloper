"use client";

import Image from "next/image";
import { useTheme } from "@/contextapi/ThemeContext";
import { useGetProducts } from "@/query/apis/queryApi";
import { Product } from "@/types/homeTypes";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import PrimaryButton from "@/components/buttons/PrimaryButtons";

const Page = () => {
  const {
    theme,
    themeConfig,
    getCardClasses,
    getButtonClasses,
    getHeadingClasses,
    getTextClasses,
  } = useTheme();

  const { data: featuredProducts, isLoading: loading } = useGetProducts(
    "products",
    "https://fakestoreapi.com/products?limit=6"
  );

  const getContainerClasses = () => {
    if (theme === "theme3") return "max-w-7xl mx-auto px-6";
    return "max-w-7xl mx-auto px-6";
  };

  const getGridClasses = () => {
    const base = "grid gap-6";
    if (theme === "theme2")
      return `${base} grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8`;
    if (theme === "theme3")
      return `${base} grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6`;
    return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`;
  };

  const getSectionSpacing = () => {
    return "space-y-16 lg:space-y-20";
  };

  return (
    <div className={`${getSectionSpacing()}`}>
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
              Welcome to ThemeApp
            </h1>

            <p
              className={`${getTextClasses()} mx-auto mb-8 leading-relaxed ${
                theme === "theme3"
                  ? "text-lg sm:text-xl lg:text-2xl max-w-4xl"
                  : "text-lg sm:text-xl max-w-3xl"
              }`}
            >
              Experience the power of dynamic theming with our beautiful,
              responsive multi-theme application that adapts to your
              preferences.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <PrimaryButton
                getButtonClasses={getButtonClasses}
                disabled={false}
              >
                Explore Products
              </PrimaryButton>
              <SecondaryButton themeConfig={themeConfig}>
                Learn More
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
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
              Why Choose ThemeApp?
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto leading-relaxed ${
                theme === "theme3" ? "text-lg lg:text-xl" : "text-lg"
              }`}
            >
              Our application showcases the power of thoughtful design and
              exceptional user experience across multiple stunning themes.
            </p>
          </div>

          <div className={getGridClasses()}>
            {[
              {
                icon: "🎨",
                title: "Beautiful Themes",
                description:
                  "Three distinct themes that completely transform the look and feel of the application with seamless transitions.",
              },
              {
                icon: "📱",
                title: "Responsive Design",
                description:
                  "Perfectly optimized for all devices from mobile phones to large desktop screens.",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description:
                  "Built with modern technologies for exceptional performance and smooth user interactions.",
              },
              {
                icon: "🔒",
                title: "Secure & Reliable",
                description:
                  "Your data is protected with enterprise-grade security measures and reliability.",
              },
              {
                icon: "🌟",
                title: "Amazing UX",
                description:
                  "Intuitive navigation, delightful animations, and thoughtful user interface design.",
              },
              {
                icon: "🚀",
                title: "Modern Stack",
                description:
                  "Built with Next.js, TypeScript, and Tailwind CSS for the best developer experience.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${getCardClasses()} group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 lg:p-8`}
              >
                <div
                  className={`mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    theme === "theme3" ? "text-4xl lg:text-5xl" : "text-4xl"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`${getHeadingClasses()} font-semibold mb-3 ${
                    theme === "theme3" ? "text-xl" : "text-lg"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={`${getTextClasses()} leading-relaxed text-sm`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products section */}
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
              Featured Products
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto leading-relaxed ${
                theme === "theme3" ? "text-lg lg:text-xl" : "text-lg"
              }`}
            >
              Discover our handpicked selection of amazing products curated just
              for you
            </p>
          </div>

          {loading ? (
            <div className={getGridClasses()}>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`${getCardClasses()} p-6 animate-pulse`}
                >
                  <div
                    className={`w-full h-48 mb-4 ${themeConfig.borderRadius} ${themeConfig.accent}`}
                  ></div>
                  <div
                    className={`h-4 mb-3 ${themeConfig.borderRadius} ${themeConfig.accent}`}
                  ></div>
                  <div
                    className={`w-2/3 h-4 mb-4 ${themeConfig.borderRadius} ${themeConfig.accent}`}
                  ></div>
                  <div
                    className={`w-1/2 h-6 ${themeConfig.borderRadius} ${themeConfig.accent}`}
                  ></div>
                </div>
              ))}
            </div>
          ) : (
            <div className={getGridClasses()}>
              {featuredProducts.map((product: Product) => (
                <div
                  key={product.id}
                  // className={`border group overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col rounded-[var(--radius)]`}
                  className={`${getCardClasses()} group overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col radius-theme1`}
                >
                  <div
                    className={`relative w-full h-48 lg:h-56 mb-4 overflow-hidden  ${themeConfig.borderRadius}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-4 lg:p-6">
                    <h3
                      className={`${getHeadingClasses()} font-semibold mb-2 line-clamp-2 text-lg`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className={`${getTextClasses()} mb-4 line-clamp-3 flex-1 text-sm leading-relaxed`}
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 mt-auto">
                      <span
                        className={`${getHeadingClasses()} font-bold text-xl`}
                      >
                        ${product.price}
                      </span>
                      <button
                        className={`${getButtonClasses()} text-sm px-4 py-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <PrimaryButton getButtonClasses={getButtonClasses} disabled={false}>
              View All Products
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16">
        <div className={getContainerClasses()}>
          <div className="mb-12 text-center">
            <h2
              className={`${getHeadingClasses()} font-bold mb-6 ${
                theme === "theme3"
                  ? "text-3xl sm:text-4xl lg:text-5xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              }`}
            >
              Ready to Get Started?
            </h2>
            <p
              className={`${getTextClasses()} max-w-3xl mx-auto mb-8 leading-relaxed ${
                theme === "theme3" ? "text-lg" : "text-lg"
              }`}
            >
              Join thousands of users who have already discovered the power of
              beautiful, theme-aware applications that adapt to their needs and
              preferences.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <PrimaryButton
                getButtonClasses={getButtonClasses}
                disabled={false}
              >
                Get Started Now
              </PrimaryButton>
              <SecondaryButton themeConfig={themeConfig}>
                Contact Us
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-16">
        <div className={getContainerClasses()}>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {[
              {
                stat: "10k+",
                label: "Happy Users",
                description: "Satisfied customers worldwide",
              },
              {
                stat: "50+",
                label: "Products",
                description: "Quality items available",
              },
              {
                stat: "99%",
                label: "Satisfaction",
                description: "Customer approval rate",
              },
              {
                stat: "24/7",
                label: "Support",
                description: "Always here to help",
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
    </div>
  );
};

export default Page;
