import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns dos projetos que desenvolvi recentemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Djouleco"
              description="Djoule.co é um sistema incrível que mistura a simplicidade ao mexer em um software com um poderoso sistema de automações, os mecanismos Djouleco permite você a clicar, copiar, colar, navegar e temporizar interações com a Web, é como recordar seus paços e replicá-los de forma infinita."
              ghLink="https://djouleco.com/docs"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Chartwo"
              description="Chartwo é um dos melhores sistemas quando se trata de IA e Finanças, isso porque com Chartwo você pode ler e gerar insights significativos através de gráficos adquiridos do mercado, financeiro, atualmente a IA conta com um modelo treinado para bitcoins e gráficos da Binance, que tal você dar uma olhada ?."
              ghLink="https://chartwo.com"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="S.Symfony"
              description="Startup Symfony é um sistema cosntruído em Angular e Symfony, um poderoso framework do PHP, o projeto nasceu como desafio proosto a mim e continua sendo até hoje um belo retrato de como se fazer um bom site, com milhares de tecnologias envolventes, confira ainda hoje no meu github."
              ghLink="https://github.com/RODRIGO20031112/DESAFIO-VOX"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Phone Hunter"
              description="Você com certeza sempre quis o telefone daquele empresa e de muitas outras, seja pra prospectar ou até mesmo pra um breve contato, você já pensou como isso pode ser útil, com phone hunter vc n garante apenas um único número de telefone, você garante milhares deles, com um filtro que você mesmo escolhe."
              ghLink="https://github.com/RODRIGO20031112/PHONE-HUNTER"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Portfolio"
              description="Atualmente eu desenvolvo tanto com tecnologias backend quanto frotend, porém esse template com certeza merece ser prestigiado por diversos programadores e designers que querem ter um portfólio, por isso deixei seu código aberto e o projeto pode ser consumido por outros profissionais."
              ghLink="https://github.com/RODRIGO20031112/PORTFOLIO-RODRIGO-CARVALHO"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Server Creator"
              description="Você já se perguntou como é feito a organização de servidores ? Com esse código c++ e webassembly você tem uma visão ampla de como isso pode ser feito, apenas um esboço, porém, muito significativo."
              ghLink="https://github.com/RODRIGO20031112/C-SERVER-CREATOR-WEBASSEMBLY"
              demoLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
