import styles from "./style.module.css";

export const PreviewHeader = () => {
  return (
    <>
      <header className={styles.storeheader}>
        <div className={styles.storeleft}>
          <h1 className={styles.storetitle}>Products</h1>
        </div>
        <nav className={styles.storenav}>
          <ul className={styles.storenavmenu}>
            {/* <li>Home</li>
            <li>Products</li>
            <li>Offers</li>
            <li>Contact</li> */}
          </ul>
        </nav>
        <div className={styles.storeright}>
          {/* <button className={styles.storebtn}>🔍Search</button>
          <button className={styles.storebtn}>🛒 Cart</button>
          <button className={styles.storebtn}>👤 Profile</button> */}
        </div>
      </header>
    </>
  );
};
