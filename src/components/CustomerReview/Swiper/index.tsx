// components/Testimonials/index.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./styles.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Renata",
    role: "cliente",
    image: "/clientsReview/renata.png",
    text: "Precisei de um certificado de para assinar a transferência de um terreno de outra cidade. O suporte me ajudou demais pois nunca nem tinha ouvido falar de certificado rs",
  },
  {
    name: "Contabil7",
    role: "cliente-parceiro",
    image: "/clientsReview/contabil7.png",
    text: "Todos os anos renovamos nosso eCNPJ com a Giza Cert, além de indicarmos para todos nossos clientes",
  },
  {
    name: "Ozeias",
    role: "cliente",
    image: "/clientsReview/ozeias.png",
    text: "Ótimo atendimento!",
  },
  {
    name: "Bella",
    role: "cliente",
    image: "/clientsReview/bella.png",
    text: "Me ajudou demais quando precisei do certificado com urgência.",
  },
  {
    name: "Giovana",
    role: "cliente",
    image: "/clientsReview/giovana.png",
    text: "Fui bem atendida pelo Allan, tirou todas as minhas dúvidas!",
  },
  {
    name: "Leonardo",
    role: "parceiro",
    image: "/clientsReview/leo.png",
    text: "Indico a Giza Cert para meus clientes providenciarem o e-CPF e assinarem o contrato social com agilidade.",
  },
  {
    name: "Eduardo",
    role: "cliente",
    image: "/clientsReview/eduardo.jpg",
    text: "Sempre me avisa com antecedência que meu certificado digital irá vencer, ajudar demais.",
  },
];


export default function SwiperComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.testimonialsSection}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 3 }, // Tablet e acima: 3
        }}
        navigation={!isMobile}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={t.image}
                width={60}
                height={60}
                alt={t.name}
                className={styles.avatar}
              />
            </div>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
            <p className={styles.quote}>“{t.text}”</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
