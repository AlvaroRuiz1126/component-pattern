import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../style/custom-styles.css";
/* import {
  //ProductButtons,
  ProductCard,
  //ProductImage,
  //ProductTitle,
} from "../components/ProductCard"; */

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            key={product.id}
            onChange={(event) => onProductCountChange(event)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        {/* <ProductCard product={product2} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}
      </div>

      <div className="shopping-card">
        {/* alternative way */}
        {Object.entries(shoppingCart).map(([key, productInCart]) => (
          <ProductCard
            key={key}
            product={productInCart}
            className="bg-dark"
            style={{ width: "100px" }}
            onChange={(event) => onProductCountChange(event)}
            value={productInCart.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
        {/* {Object.values(shoppingCart).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            onChange={(event) => onProductCountChange(event)}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))} */}

        {/* <ProductCard
          product={product2}
          className="bg-dark"
          style={{ width: "100px" }}
          onChange={(event) => onProductCountChange(event)}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard> */}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};

export default ShoppingPage;
