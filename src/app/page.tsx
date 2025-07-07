import Hero from "@/components/Hero";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import PriceCertificate from "@/components/PriceCertificate";
import CustomerReview from "@/components/CustomerReview";
import DownloadCertificado from "@/components/DownloadCertificado";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <FAQ/>
      <PriceCertificate/>
      <CustomerReview/>
      <DownloadCertificado/>
      <CookieConsent/>
      <Footer/>
    </main>
  );
}
