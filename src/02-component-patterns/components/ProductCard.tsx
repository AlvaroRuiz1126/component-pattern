import React, { createContext } from "react";
import styles from "../style/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";
/* import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons"; */

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReach, reset } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReach,
            reset,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
          })}
        {/* <ProductImage img={product.img} />

        <ProductTitle title={product.title} />

        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

/* ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; */
