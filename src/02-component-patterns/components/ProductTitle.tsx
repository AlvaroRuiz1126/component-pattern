import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../style/styles.module.css";

export const ProductTitle = ({ title, className, style }: { title?: string, className?: string, style?: React.CSSProperties }) => {
    const { product } = useContext(ProductContext);
  
    return (
      <span className={`${styles.productDescription} ${className}`} style={style}>{title ? title : product.title}</span>
    );
  };