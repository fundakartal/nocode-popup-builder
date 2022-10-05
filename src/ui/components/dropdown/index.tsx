import React from 'react';
import Link from 'next/link';
import { MenuItems } from './MenuItems';
import styles from './Dropdown.module.scss';

const Dropdown = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul onClick={handleClick} className={styles.dropdown}>
      {MenuItems.map((item, index) => {
        return (
          <li
            onClick={() => setClick(false)}
            className={styles.dropdownItem}
            key={index}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
