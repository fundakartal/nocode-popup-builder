import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../../components/button';
import Container from '../../components/container';
import Dropdown from '../../components/dropdown';
import { CaretDownIcon, MenuIcon, XMarkIcon } from '../../components/icons';
import styles from './Header.module.scss';

const Header = () => {
  const [click, setClick] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerImage}>
          <Image src='/logo.svg' alt='' width={36} height={36} layout='fixed' />
          <span className={styles.headerSpan}>modal.cards</span>
        </div>

        <Button className={styles.menuIcon} onClick={handleClick}>
          {click ? <XMarkIcon /> : <MenuIcon />}
        </Button>
        <nav className={`${click ? 'flex' : 'hidden'} ${styles.navbar} `}>
          <ul className={styles.navbarContainer}>
            <li
              className={styles.navbarDropdown}
              onClick={() => setDropdown(!dropdown)}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <div className={styles.navbarDropdownLink}>
                <Link href='/'>Solutions</Link>
                <CaretDownIcon />
              </div>
              <div className={styles.navbarDropdownMenu}>
                {dropdown && <Dropdown />}
              </div>
            </li>
            <li className={styles.navbarLink}>
              <Link href='/'>Product Tour</Link>
            </li>
            <li className={styles.navbarLink}>
              <Link href='/'>Showcase</Link>
            </li>
            <li className={styles.navbarLink}>
              <Link href='/'>Pricing</Link>
            </li>
          </ul>
          <div className={styles.navbarRight}>
            <div className={styles.navbarRightLink}>
              <Link href='/'>Sign in</Link>
            </div>
            <Button className={styles.navbarButton}>Try for free</Button>
          </div>
        </nav>
      </div>
    </Container>
  );
};
export default Header;
