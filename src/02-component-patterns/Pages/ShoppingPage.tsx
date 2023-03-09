import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/index";
import { products } from "../data/products";
import "../style/custom-styles.css";
/* import {
  //ProductButtons,
  ProductCard,
  //ProductImage,
  //ProductTitle,
} from "../components/ProductCard"; */

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        product={product}
        className="bg-dark"
        key={product.id}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, isMaxCountReach, count, increaseBy }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReach && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
