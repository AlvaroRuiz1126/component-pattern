import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import no_image from "../assets/no-image.jpg";
import styles from "../style/styles.module.css";


export const ProductImage = ({ img, className, style }: { img?: string, className?: string, style?: React.CSSProperties }) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;
  
    if(img){
      imgToShow = img;
    }else if(product.img){
      imgToShow = product.img
    }else{
      imgToShow = no_image
    }
    
    return (
      <img
        className={`${styles.productImg} ${className}`}
        src={imgToShow}
        alt="Coffe Mg"
        style={styles}
      />
    );
  };