// components/PoliticaPrivacidade/index.tsx


import { Button } from '@mui/material';
import styles from './styles.module.css';
import Link from 'next/link';


export default function PoliticaPrivacidade() {
  return (
    <div>
    <div className={styles.container}>
        <Link href={"/"}>
        <Button>VOLTAR</Button>
        </Link>
      <h2>Política de Privacidade</h2>
      <p>
        A sua privacidade é importante para nós. É política do Giza Cert respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://certificadoedigital.com.br/">Giza Cert</a>, e outros sites que possuímos e operamos.
      </p>
      <p>
        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
      </p>
      <p>
        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
      </p>
      <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
      <p>
        O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href="https://politicaprivacidade.com/" target="_blank" rel="noopener noreferrer">políticas de privacidade</a>.
      </p>
      <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
      <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.</p>

      <h3>Cookies e Anúncios</h3>
      <ul>
        <li>O serviço Google AdSense usa um cookie DoubleClick para veicular anúncios mais relevantes e limitar o número de vezes que um determinado anúncio é exibido para você.</li>
        <li>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google.</li>
        <li>Utilizamos anúncios para compensar os custos de funcionamento do site e financiar desenvolvimentos futuros.</li>
        <li>Cookies de rastreamento de afiliados nos permitem saber se você veio de um parceiro e permitir promoções exclusivas.</li>
      </ul>

      <h3>Compromisso do Usuário</h3>
      <ul>
        <li>Não se envolver em atividades ilegais ou contrárias à boa fé e à ordem pública.</li>
        <li>Não difundir propaganda ou conteúdo racista, xenofóbico, pornográfico ilegal, apologia ao terrorismo ou contra os direitos humanos.</li>
        <li>Não causar danos aos sistemas físicos e lógicos do Giza Cert ou de terceiros, incluindo disseminação de vírus.</li>
      </ul>

      <h3>Mais Informações</h3>
      <p>
        Esta política é efetiva a partir de 24 de junho de 2025.
      </p>

      <h2>Termos de Uso</h2>
      <h3>1. Termos</h3>
      <p>Ao acessar o site Giza Cert, você concorda com os termos de serviço e leis aplicáveis. Caso não concorde, não utilize o site.</p>

      <h3>2. Uso de Licença</h3>
      <p>Você pode baixar temporariamente materiais do site para uso pessoal e não comercial, mas não pode:</p>
      <ol>
        <li>Modificar ou copiar os materiais.</li>
        <li>Usá-los para fins comerciais.</li>
        <li>Descompilar ou fazer engenharia reversa.</li>
        <li>Remover avisos de direitos autorais.</li>
        <li>Transferi-los para terceiros.</li>
      </ol>

      <h3>3. Isenção de Responsabilidade</h3>
      <p>O site e os materiais são fornecidos como estão, sem garantias expressas ou implícitas.</p>

      <h3>4. Limitações</h3>
      <p>Em nenhuma hipótese o Giza Cert será responsável por danos decorrentes do uso do site.</p>

      <h3>5. Precisão dos Materiais</h3>
      <p>O site pode conter erros. Não garantimos que os materiais estejam atualizados.</p>

      <h3>6. Links</h3>
      <p>O Giza Cert não se responsabiliza por sites externos vinculados ao nosso.</p>

      <h3>Modificações</h3>
      <p>Podemos alterar estes termos a qualquer momento sem aviso prévio.</p>

      <h3>Lei Aplicável</h3>
      <p>Estes termos são regidos pelas leis brasileiras e você se submete à jurisdição dos tribunais do Brasil.</p>
        <Link href={"/"}>
        <Button>VOLTAR</Button>
        </Link>
    </div>

    </div>
  );
}
