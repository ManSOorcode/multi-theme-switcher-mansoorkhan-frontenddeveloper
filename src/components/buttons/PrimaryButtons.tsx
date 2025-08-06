import { PrimaryButtonProps } from "@/types/homeTypes";

const PrimaryButton = ({
  children,
  disabled,
  getButtonClasses,
  ...props
}: PrimaryButtonProps) => (
  <button
    className={`${getButtonClasses()} px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
