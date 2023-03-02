import React from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Compound component pattern, todos los children comparten la misma información mediante el contexto product */}
        <ProductCard product={product}>
          <ProductImage img="" />
          <ProductTitle title="" />
          <ProductButtons />
        </ProductCard>
        {/* Esta forma es cuando hacemos el object */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
