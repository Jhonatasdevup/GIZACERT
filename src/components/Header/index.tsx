"use client"
import Image from "next/image";
import styles from "./styles.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLi = ["COMO FUNCIONA", "VALORES", "SUPORTE"];

  return (
    <header className={styles.header}>
      <div className={styles.menuIconMobile} onClick={() => setMenuOpen(true)}>
        <MenuIcon fontSize="large" />
      </div>

      <div className={styles.logo}>
        <Image alt="giza cert" src="/gz.png" width={100} height={70} style={{height: 115}}/>
        <div>
          <strong className={styles.title}>GIZA CERT</strong>
          <p className={styles.subtitle}>CERTIFICADOS DIGITAIS</p>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul>
          {menuLi.map((item, index) => (
            <li key={item + index}>
              <Link href={item === "SUPORTE" ? "https://wa.me/5512991988280?text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+certificado." :`#${item}`} className={styles.navLink} target="_blank">
                {item} <KeyboardArrowDownIcon fontSize="large" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
            <CloseIcon fontSize="large" />
          </div>
          <ul>
            <Image alt="giza cert" src="/gz.png" width={100} height={70} style={{height: 115}}/>
            {menuLi.map((item, index) => (
              <li key={item + index} style={{marginTop:25}}>
                <Link
                  href={item === "SUPORTE" ? "https://wa.me/5512991988280?text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+certificado." :`#${item}`}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
