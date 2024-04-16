import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple"> ME </span> APRESENTAR
            </h1>
            <p className="home-about-body">
              Me apaixonei por programação e pelo menos aprendi alguma coisa, eu
              acho… 🤷‍♂️
              <br />
              <br />
              Eu mando muito bem nisso
              <i>
                <b className="purple">, desenvolver é um hobby </b>
              </i>
              <br />
              <br />
              Minhas áreas de interesse são &nbsp;
              <i>
                <b className="purple">
                  {" "}
                  a construção de novas tecnologias e produtos Web{" "}
                </b>{" "}
                e também em áreas relacionadas ao{" "}
                <b className="purple">como análise de dados.</b>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão pelo
              desenvolvimento de produtos com <b className="purple">
                Frontend
              </b>{" "}
              e
              <i>
                <b className="purple"> Backend</b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> APIs integradas</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE ON</h1>
            <p>
              Sinta-se a vontade para <span className="purple">conectar </span>
              comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RODRIGO20031112"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rodrigo-bianco-de-carvalho/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
