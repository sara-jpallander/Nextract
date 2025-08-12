import Image, { StaticImageData } from "next/image";
import styles from "./cards.module.css";

type CardProps = {
  imgurl: StaticImageData;
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ imgurl, title, text }) => {
  return (
    <div className={styles.container}>
      <Image
        src={imgurl}
        alt="img"
        width={100}
        height={100}
        unoptimized={true}
      />
      <section className={styles.text}>
        <h3>{title}</h3>
        <p>{text}</p>
      </section>
    </div>
  );
};

export default Card;
