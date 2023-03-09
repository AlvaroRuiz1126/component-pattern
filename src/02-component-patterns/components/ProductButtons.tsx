import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../style/styles.module.css";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //sacar de aca un maxCount
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  //hacer un callback con useCallback llamada isMaxReached [counter, maxCounter]
  //regresa un true si el counter es igual al maxCounter y false si es lo contrario
  const isMaxReached = useCallback(
    () => (counter === maxCount ? true : false),
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ""
        }`}
        disabled={isMaxReached()}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
