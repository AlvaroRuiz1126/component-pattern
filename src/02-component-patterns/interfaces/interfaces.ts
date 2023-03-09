import { ReactElement } from "react";
import { ProductCardProps } from "../components/ProductCard";
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  ({ children, product, className }: ProductCardProps): JSX.Element;
  Title: ({
    title,
    className,
  }: {
    title?: string;
    className?: string;
  }) => JSX.Element;
  Image: ({
    img,
    className,
  }: {
    img?: string;
    className?: string;
  }) => JSX.Element;
  Buttons: ({ className }: { className?: string }) => JSX.Element;
}

/* interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}; */

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReach: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
