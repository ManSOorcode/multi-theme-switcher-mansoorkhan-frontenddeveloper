import { FilterButtonProps } from "@/types/homeTypes";

const FilterButton = ({
  children,
  active,
  themeConfig,
  ...props
}: FilterButtonProps) => (
  <button
    className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
      themeConfig.borderRadius
    } ${
      active
        ? `${themeConfig.primary} ${themeConfig.textSecondary} shadow-md`
        : `${themeConfig.textSecondary} ${themeConfig.border} border hover:${themeConfig.bgSecondary}`
    }`}
    {...props}
  >
    {children}
  </button>
);

export default FilterButton;
