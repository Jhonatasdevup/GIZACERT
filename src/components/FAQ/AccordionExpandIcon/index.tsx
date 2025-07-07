import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./styles.module.css";

export default function AccordionExpandIcon() {
  const dataFAQ = [
    {
      question: "Qual o melhor certificado para você?",
      response:
        "O melhor certificado é aquele que se encaixa no seu dia a dia. Se você precisa assinar documentos, acessar sistemas do governo ou vai usar o certificado em mais de um computador, o modelo A1 (arquivo digital) pode ser ideal. Já se você precisa de mais segurança, o modelo A3 (token) pode ser o melhor caminho. Se ainda tiver dúvidas, fale com a gente — vamos te ajudar a escolher com tranquilidade!",
      id: 1,
    },
    {
      question: "O certificado digital é seguro?",
      response: `Sim!<br/>
    A Giza Cert trabalha em parceria com a Platáno, especialistas em identificação digital, credenciados pela ICP-Brasil e pelo ITI — Instituto Nacional de Tecnologia da Informação.
    Seu certificado possui validade jurídica e utiliza criptografia de ponta para proteger seus dados.`,
      id: 2,
    },
    {
      question: "Como é feita a emissão do certificado?",
      response: `De forma simples e rápida:<br/>
    1º Você escolhe o tipo de certificado ideal para você.<br/>
    2º Informa seus dados para um de nossos atendentes.<br/>
    3º Efetua o pagamento de forma online e segura.<br/>
    4º Agenda uma videoconferência para validar seu certificado.<br/>
    Depois disso, seu certificado estará pronto para uso. Se precisar, a gente te guia passo a passo.`,
      id: 3,
    },
    {
      question: "Preciso de certificado digital para conseguir um empréstimo?",
      response: `Depende do tipo de empréstimo e da instituição.
      Alguns bancos e linhas de crédito exigem certificado digital para garantir mais segurança nas assinaturas ou no acesso aos portais.
      Se você for pessoa jurídica, é bem provável que precise.
      Em caso de dúvida, vale confirmar diretamente com o banco.`,
      id: 4,
    },
    {
      question: "Preciso de certificado digital para cartório?",
      response: `Sim, em muitos casos sim.
      Para assinar documentos com validade legal ou realizar registros online, o cartório pode exigir um certificado digital.
      Ele funciona como sua assinatura eletrônica — válida, segura e reconhecida legalmente.
      É como levar sua identidade no bolso… só que no computador!`,
      id: 5,
    },
  ];
  return (
    <div className={styles.divMain}>
      {dataFAQ.map((item) => (
        <Accordion
          defaultExpanded={item.id === 1 ? true : false}
          key={item.id}
          disableGutters
          elevation={0}
          square
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
            paddingTop: 2,
            marginBottom: 2,
            "&::before": {
              display: "none",
            },
            borderBottom: 1,
            borderColor: "rgba(0, 0, 0, 0.14)",
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel-content"
            id={`panel-header-${item.id}`}
            sx={{
              padding: 0,
              minHeight: "unset",
              "&.Mui-expanded": {
                minHeight: "unset",
              },
            }}
          >
            <Typography component="span">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0, paddingBottom: 2 }}>
            <Typography
            sx={{ textAlign: "left" }}
            component="div"
            dangerouslySetInnerHTML={{ __html: item.response }}
          />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
