import { ThemeConfig } from "@/contextapi/ThemeContext";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  getButtonClasses: () => string;
}

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
  themeConfig: ThemeConfig;
}

export type { PrimaryButtonProps, FilterButtonProps, Product };
