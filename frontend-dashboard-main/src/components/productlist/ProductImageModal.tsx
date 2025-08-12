import styles from "./styles.module.css";
import Image from "next/image";

const ProductImageModal = ({
  productImage,
  onClose,
}: {
  productImage: string | null;
  onClose: () => void;
}) => {
  console.log(productImage)
  if (!productImage) return null;

  return (
    <div className={styles.modaloverlay} onClick={onClose}>
      <div className={`${styles.modalcontent}`} onClick={(e) => e.stopPropagation()}>
        <Image src={productImage} alt="Product" width={50} height={50}/>
        <button className={styles.closebutton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductImageModal;
