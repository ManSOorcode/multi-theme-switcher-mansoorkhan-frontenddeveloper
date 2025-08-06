"use client";

import FilterButton from "@/components/buttons/FilterButton";
import PrimaryButton from "@/components/buttons/PrimaryButtons";
import NewsLetter from "@/components/NewsLetter";
import { useTheme } from "@/contextapi/ThemeContext";
import { useGetCategory, useGetProducts } from "@/query/apis/queryApi";

import Image from "next/image";

import React, { useState, useMemo } from "react";

const Page = () => {
  const {
    theme,
    themeConfig,
    getCardClasses,
    getButtonClasses,
    getHeadingClasses,
    getTextClasses,
  } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");

  const [searchQuery, setSearchQuery] = useState("");

  const { data: products, isLoading: loading } = useGetProducts(
    "products",
    "https://fakestoreapi.com/products"
  );

  const { data: categories } = useGetCategory(
    "categories",
    "https://fakestoreapi.com/products/categories"
  );

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let filtered = [...products];

    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (product) =>
          (product.title?.toLowerCase() || "").includes(query) ||
          (product.description?.toLowerCase() || "").includes(query) ||
          (product.category?.toLowerCase() || "").includes(query)
      );
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy]);

  const getContainerClasses = () => {
    if (theme === "theme2") return "max-w-7xl mx-auto px-8";
    return "max-w-7xl mx-auto px-6";
  };

  const getGridClasses = () => {
    const base = "grid gap-6";
    if (theme === "theme2")
      return `${base} grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8`;
    if (theme === "theme3")
      return `${base} grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6`;
    return `${base} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`;
  };

  const getSectionSpacing = () => {
    return "space-y-12 lg:space-y-16";
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">
          ☆
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={themeConfig.textSecondary}>
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={`pt-20 pb-16 ${getSectionSpacing()}`}>
      <section className="py-8 lg:py-12">
        <div className={getContainerClasses()}>
          <div className="text-center mb-8">
            <h1
              className={`${getHeadingClasses()} font-bold mb-4 leading-tight ${
                theme === "theme3"
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : theme === "theme2"
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              }`}
            >
              Our Products
            </h1>
            <p
              className={`${getTextClasses()} mx-auto leading-relaxed ${
                theme === "theme3"
                  ? "text-lg sm:text-xl max-w-4xl"
                  : "text-lg max-w-3xl"
              }`}
            >
              Discover our amazing collection of products carefully curated for
              you
            </p>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className={getContainerClasses()}>
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 ${themeConfig.border} border ${themeConfig.borderRadius} ${themeConfig.text} ${themeConfig.bg} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories?.map((category: { name: string; slug: string }) => (
                <FilterButton
                  key={category.slug}
                  active={selectedCategory === category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  themeConfig={themeConfig}
                >
                  {category.name}
                </FilterButton>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className={`${getTextClasses()} text-sm`}>
              Showing {filteredProducts?.length} of {products?.length} products
            </div>
            <div className="flex items-center gap-3">
              <span className={`${getTextClasses()} text-sm font-medium`}>
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-3 py-2 text-sm ${themeConfig.border} border ${themeConfig.borderRadius} ${themeConfig.text} ${themeConfig.bg} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="default">Default</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className={getContainerClasses()}>
          {loading ? (
            <div className={getGridClasses()}>
              {[...Array(12)].map((_, i) => (
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
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className={`${getTextClasses()} text-6xl mb-4`}>🔍</div>
              <h3
                className={`${getHeadingClasses()} text-xl font-semibold mb-2`}
              >
                No products found
              </h3>
              <p className={`${getTextClasses()} mb-6`}>
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSortBy("default");
                }}
                className={`${getButtonClasses()} px-6 py-3`}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={getGridClasses()}>
              {filteredProducts?.map((product) => (
                <div
                  key={product.id}
                  className={`${getCardClasses()} group overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col`}
                >
                  <div
                    className={`relative w-full h-48 lg:h-56 mb-4 overflow-hidden ${themeConfig.borderRadius}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div
                      className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium ${themeConfig.primary} text-white ${themeConfig.borderRadius}`}
                    >
                      {product.category}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-4 lg:p-6">
                    <h3
                      className={`${getHeadingClasses()} font-semibold mb-2 line-clamp-2 ${
                        theme === "theme3" ? "text-lg" : "text-base"
                      }`}
                    >
                      {product.title}
                    </h3>

                    <p
                      className={`${getTextClasses()} mb-3 line-clamp-2 flex-1 text-sm leading-relaxed`}
                    >
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {renderStars(product.rating.rate)}
                      </div>
                      <span className={`${getTextClasses()} text-xs`}>
                        ({product.rating.count} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-auto">
                      <span
                        className={`${getHeadingClasses()} font-bold ${
                          theme === "theme3" ? "text-xl" : "text-lg"
                        }`}
                      >
                        ${product.price}
                      </span>
                      <PrimaryButton
                        getButtonClasses={getButtonClasses}
                        disabled={false}
                      >
                        Add to Cart
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <NewsLetter
        getCardClasses={getCardClasses}
        getHeadingClasses={getHeadingClasses}
        getTextClasses={getTextClasses}
        getInputClasses={() =>
          `flex-1 px-4 py-3 ${themeConfig.border} border ${themeConfig.borderRadius} ${themeConfig.text} ${themeConfig.bg} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`
        }
        getContainerClasses={getContainerClasses}
        theme={theme}
        getButtonClasses={getButtonClasses}
      />
    </div>
  );
};

export default Page;
