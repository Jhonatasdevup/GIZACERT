import React from "react";
import styles from "./styles.module.css";
import Divider from '@mui/material/Divider';
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Link from "next/link";

type QualityType = {
  icon: "security" | "access_time" | "local_offer";
  text: string;
};

interface BoxPriceProps {
  name: string;
  price: number;
  oldPrice: number;
  duration: string;
  type: string;
  storage: string;
  haveFrete: boolean;
  qualities: readonly QualityType[];
}

const iconMap = {
  security: <SecurityIcon className={styles.qualityIcon} />,
  access_time: <AccessTimeIcon className={styles.qualityIcon} />,
  local_offer: <LocalOfferIcon className={styles.qualityIcon} />,
}

export default function BoxPrice(props: BoxPriceProps) {
  const { name, price, oldPrice, duration, type, storage, qualities, haveFrete } = props;
  return (
    <div className={styles.divMain}>
      <h3 className={styles.title}>{name}</h3>
      <Divider sx={{ width: '100%' }} />
      <p className={styles.subTitle}>{type}</p>

      <ul className={styles.qualities}>
        {qualities.map((q, i) => (
          <li key={q.text + i}>{iconMap[q.icon]} {q.text}</li>
        ))}
      </ul>

      <div className={styles.feature}>
        <FolderOpenIcon style={{ color: "#4B0082" }} />
        <p className={styles.text}>Armazenado no {storage}</p>
      </div>
      <div className={styles.feature}>
        <AccessTimeIcon style={{ color: "#4B0082" }} />
        <p className={styles.text}>Válido por {duration}</p>
      </div>
      <h5 className={styles.price}>
        <span className={styles.oldPrice}>R${oldPrice}</span><br/>
        <span className={styles.newPrice}><span style={{fontSize: 25}}>R$</span>{price}</span>
        <span style={{fontSize: 20}}>{haveFrete ? "+ FRETE": ""}</span>
      </h5>
      <Link target="_blank" href={`https://wa.me/5512991988280?text=Olá%2C%20vi%20o%20certificado%20${name}%20no%20site%20e%20quero%20saber%20como%20posso%20adquirir.`}>
        <button className={styles.button}>Comprar</button>
      </Link>
    </div>
  );
}
