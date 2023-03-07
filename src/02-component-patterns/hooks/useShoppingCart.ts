import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCartState) => {
      const productInCart: ProductInCart = oldShoppingCartState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...oldShoppingCartState,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCartState;

      return rest;
      /* if (count === 0) {
            delete shoppingCart[product.id];
            const { [product.id]: toDelete, ...rest } = oldShoppingCartState;
    
            return rest;
          }
    
          return {
            ...oldShoppingCartState,
            [product.id]: { ...product, count },
          }; */
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
