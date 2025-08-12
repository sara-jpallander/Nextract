import React, { FC } from 'react'
import styles from "./styles.module.css";

type DropDown = {
    hoverElement: React.ReactNode;
    listItems: FC[];
}

const DropDownMenu: React.FC<DropDown> = ({hoverElement, listItems}) => {
  return (
    <>
    <div className={styles.dropdownMenu}>
     {hoverElement}
     <div className={styles.dropdownContent}>
        <ul className={styles.dropdownList}>
        {listItems.map((Item, index) => (
          <li key={index}><Item /></li>
        ))}
        </ul>
     </div>
    </div>
    </>
  )
}

export default DropDownMenu