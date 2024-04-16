import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, Eu sou <span className="purple"> Rodrigo </span>
            de <span className="purple"> Brasil, São Paulo.</span>
            <br />
            Atualmente trabalho como desenvolvedor web no de construção de APIs
            <br />
            Concluí o bacharel em Análise e desenvolvimento de sistemas pela
            faculdade de informática e administração paulista (FIAP).
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Prospectar
            </li>
            <li className="about-activity">
              <ImPointRight /> Empreender
            </li>
            <li className="about-activity">
              <ImPointRight /> Investir
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esforce-se para construir coisas que façam a diferença!"{" "}
          </p>
          <footer className="blockquote-footer">RODRIGO CARVALHO</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
