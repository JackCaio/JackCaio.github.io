/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { SiBootstrap, SiCss3, SiJavascript, SiJest,
  SiReact, SiRedux, SiTestinglibrary, SiDocker } from 'react-icons/si';
import Template from '../components/Template';

export default class LandingPage extends Component {
  render() {
    return (
      <Template>
        <h1>Content</h1>
        <section>
          <h2>Stack</h2>
          <ul>
            <li style={ { color: 'yellow' } }><SiJavascript /></li>
            <li><SiReact /></li>
            <li><SiJest /></li>
            <li><SiTestinglibrary /></li>
            <li><SiRedux /></li>
            <li><SiBootstrap /></li>
            <li><SiCss3 /></li>
            {/* <li><SiPhp /></li>
            <li><SiCodeigniter /></li>
            <li><SiLaravel /></li> */}
            <li><SiDocker /></li>
          </ul>
        </section>
        <section>
          <h2>Sobre mim</h2>
          {/* <p>Nascido em Agosto de 1998, e apaixonado por tecnologia desde que me entendo por gente.</p>
          <p>Descobri uma paixão pela programação durante a faculdade de Engenharia de Computação, e escolhi me aprofundar nas tecnologias necessárias para desenvolvimento WEB, entrando na Trybe.</p>
          <p>Gosto muito de aprender na prática, e de ser desafiado a fazer coisas diferentes, sempre busco oportunidades que me forcem a me desafiar e a melhorar como profissional e como pessoa.</p> */}
          <p>
            Sou uma pessoa motivada e determinada, atualmente estudando para me tornar um desenavolvedor FullStack JavaScript. Sou apaixonado por simplificar operações de negócios e gosto trabalhar em ambientes que me desafiem. Estou determinado a fazer um impacto positivo no mundo da  tecnologia.
          </p>
          <p>
            Tenho uma forte ética de trabalho, e estou sempre ansioso para aprender novas habilidades. Sou uma pessoa de aprendizado rápido, e fácil adaptação a novas situações. Gosto de trabalhar em equipe, e consigo colaborar eficazmente com os outros.
          </p>
          <p>
            Atualmente estudo na <b>Trybe</b>, onde aprendo as últimas tecnologias e boas práticas de desenvolvimento FullStack, e complementando os conteúdos que aprendi na faculdade.
          </p>
          <p>
            Estou animado para ver onde minha carreira em desenvolvimento me levará e estou aberto a oportunidades para aplicar minhas habilidades e continuar crescendo como desenvolvedor. Tenho confiança de que minhas habilidades e paixão me ajudarão a contribuir com a industria.
          </p>
        </section>
      </Template>
    );
  }
}
