import { FilterButtonProps } from "@/types/homeTypes";

const SecondaryButton = ({
  children,
  themeConfig,
  ...props
}: FilterButtonProps) => (
  <button
    className={`${themeConfig.textSecondary} ${themeConfig.border} border ${themeConfig.borderRadius} px-8 py-3 text-base font-medium transition-all duration-300 hover:${themeConfig.bgSecondary} hover:-translate-y-0.5 hover:shadow-lg`}
    {...props}
  >
    {children}
  </button>
);

export default SecondaryButton;
