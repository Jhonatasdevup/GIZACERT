import React from 'react'
import styles from './styles.module.css'
import BoxPrice from './BoxPrice'

export default function PriceCertificate() {
  const dataBoxPrice = [
    {
      name: 'e-CPF A1',
      price: 90,
      oldPrice: 120,
      duration: "4 meses",
      type: "Para pessoa física",
      storage: "computador",
      qualities: [
        { icon: "security", text: "Segurança ICP-Brasil" },
        { icon: "access_time", text: "Pronto em até 1h útil" },
      ] as const
    },
    {
      name: 'e-CPF A1',
      price: 130,
      oldPrice: 200,
      duration: "1 ano",
      type: "Para pessoa física",
      storage: "computador",
      qualities: [
        { icon: "security", text: "Segurança ICP-Brasil" },
        { icon: "access_time", text: "Pronto em até 1h útil" },
      ] as const
    },
    {
      name: 'e-CNPJ A1',
      price: 150,
      oldPrice: 240,
      duration: "1 ano",
      type: "Para empresas",
      storage: "computador",
      qualities: [
        { icon: "security", text: "Segurança ICP-Brasil" },
        { icon: "access_time", text: "Pronto em até 1h útil" },
      ] as const
    },
    {
      name: 'e-CPF A3',
      price: 280,
      oldPrice: 360,
      duration: "3 anos",
      type: "Para pessoa física",
      storage: "Token",
      qualities: [
        { icon: "security", text: "Segurança ICP-Brasil" },
        { icon: "access_time", text: "Emissão rápida" },
      ] as const
    },
    {
      name: 'e-CNPJ A3',
      price: 290,
      oldPrice: 380,
      duration: "3 anos",
      type: "Para empresas",
      storage: "Token",
      qualities: [
        { icon: "security", text: "Segurança ICP-Brasil" },
        { icon: "access_time", text: "Emissão rápida" },
      ] as const
    },
  ]

  return (
    <section className={styles.sectionMain} id='VALORES'>
      <h2>
        Certificado digital com um dos <br />
        <span> melhores preços do mercado </span>
      </h2>
      <div className={styles.divBoxs}>
        {dataBoxPrice.map((item, idx) => (
          <BoxPrice key={item.name + idx} {...item} />
        ))}
      </div>
    </section>
  )
}
