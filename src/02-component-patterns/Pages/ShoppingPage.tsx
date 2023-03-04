import React from "react";
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/index";
import '../style/custom-styles.css';
/* import {
  //ProductButtons,
  ProductCard,
  //ProductImage,
  //ProductTitle,
} from "../components/ProductCard"; */

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
        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{backgroundColor: '#70D1F8'}} >
          <ProductImage  />
          <ProductTitle  />
          <ProductButtons  />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
