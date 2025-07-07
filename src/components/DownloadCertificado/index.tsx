import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function DownloadCertificado() {
  return (
    <section className={styles.sectionMain}>
      <div className={styles.divLinkDownload}>
        <h3>JÁ ADQUIRIU SEU CERTIFICADO?</h3>
        <h4>
          Faça o download
          <br /> e começe a usar!
        </h4>
        <div className={styles.divBTT}>
          <div>
            <Link className={styles.link} href='https://aclink.safewebpss.com.br/Ferramentas/AssistenteCertificadoDigital/AssistenteCertificadoDigital.application'>
            <p>
              CERTIFICADO <br />
              TIPO A1
            </p>
          </Link>
          </div>
          <div>
            <Link className={styles.link} href="https://sci.linkcertificacao.com.br/download/midias/setup.exe">
            <p>
              CERTIFICADO <br />
              TIPO A3
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.divVideo}>
        <h3>Assista ao vídeo</h3>
        <div><VideoSection/></div>
      </div>
    </section>
  );
}


export  function VideoSection() {
  return (
 <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%', // proporção 16:9
        height: 0,
        overflow: 'hidden',
        borderRadius: '1rem', // opcional: cantos arredondados
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/xzcfMw1eI2U?si=5fhXApC_qt5RehoV"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  );
}

