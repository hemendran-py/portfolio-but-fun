"use client"; 

import { usePathname } from "next/navigation"; 
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname(); 

  return (
    <div className={styles.navbar}>
      <a href="/" className={pathname === "/" ? styles.selected : ""}>
        /
      </a>
      <a href="/gallery" className={pathname === "/gallery" ? styles.selected : ""}>
        Gallery
      </a>
      <a href="/work" className={pathname === "/work" ? styles.selected : ""}>
        Work
      </a>
      <a href="/notes" className={pathname === "/notes" ? styles.selected : ""}>
        Notes
      </a>
    </div>
  );
};

export default Navbar;
