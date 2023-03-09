import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isControlled = useRef(!!onChange);
  const isMounted = useRef(false);

  console.log(initialValues);
  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    let newValue = Math.max(counter + value, 0);

    // mi solucion
    /* if (initialValues?.maxCount && counter >= initialValues.maxCount) {
      return setCounter(initialValues.maxCount);
    } */

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCountReach:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
