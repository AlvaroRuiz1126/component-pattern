import React, { createContext } from "react";
import styles from "../style/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

// Forma alternativa al Object.assign que no funciona con el refactor porque para ello se tienen que inicializar los componentes
// en el mismo provider y no en un documento externo
// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;
