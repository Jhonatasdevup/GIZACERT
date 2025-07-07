import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className={styles.footerMain}>
      <section className={styles.sectionMain}>
        {/* Coluna 1 - Logo e certificadoras */}
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <Image
              src="/serpro.png"
              alt="serpro"
              className={styles.img}
              width={100}
              height={50}
            />
            <Image
              src="/iti.png"
              alt="iti"
              className={styles.img}
              width={80}
              height={80}
            />
            <Image
              src="/ssl.png"
              alt="iti"
              className={styles.img}
              width={50}
              height={50}
            />
          </div>
          <p className={styles.companyDescription}>
            Na Giza Cert, você compra o certificado digital e garante sua assinatura 
            eletrônica de um jeito fácil e seguro!
          </p>

        </div>

        {/* Coluna 2 - Links rápidos */}
        <div className={styles.linksColumn}>
          <h3 className={styles.columnTitle}>Certificados</h3>
          <ul className={styles.linkList}>
            <li><a href="#VALORES">e-CPF A1</a></li>
            <li><a href="#VALORES">e-CNPJ A1</a></li>
            <li><a href="#VALORES">e-CPF A3</a></li>
            <li><a href="#VALORES">e-CNPJ A3</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Suporte e informações */}
        <div className={styles.linksColumn}>
          <h3 className={styles.columnTitle}>Ajuda</h3>
          <ul className={styles.linkList}>
            <li><a href="#COMO FUNCIONA"> Como funciona</a></li>
            <li><a href="#VALORES">Valores</a></li>
            <li><a href="https://wa.me/5512991988280?text=Ol%C3%A1%2C+preciso+de+ajuda+com+meu+certificado." target="_blank">Suporte</a></li>
            <li><a href='https://aclink.safewebpss.com.br/Ferramentas/AssistenteCertificadoDigital/AssistenteCertificadoDigital.application'>Download do certificado tipo A1</a></li>
            <li><a href="https://sci.linkcertificacao.com.br/download/midias/setup.exe">Download do certificado tipo A3</a></li>
          </ul>
        </div>

        {/* Coluna 4 - Contato e newsletter */}
        <div className={styles.contactColumn}>
          <h3 className={styles.columnTitle}>Fale conosco</h3>
          <p className={styles.contactInfo}>
            Atendimento: Seg-Sex, 9h-17h<br />
            Email: gizacert@gmail.com<br />
            Telefone: (12) 9 9198-8280
          </p>
        </div>
      </section>

      {/* Rodapé inferior */}
      <section className={styles.footerBottom}>
        <p className={styles.privace}>
          <a href="/politica-de-privacidade" style={{textDecoration: 'none', color: 'white'}}>
          Termos de uso | Política de Privacidade | Política de Cookies
          </a>
        </p>
        <p className={styles.copyright}>
          Copyright © 2025 Certificado Digital Express. Todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
}