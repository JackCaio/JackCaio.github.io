/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { SiBootstrap, SiCss3, SiJavascript, SiJest,
  SiReact, SiRedux, SiTestinglibrary, SiDocker, SiMysql } from 'react-icons/si';
import Template from '../components/Template';

export default class LandingPage extends Component {
  render() {
    return (
      <Template>
        <section>
          <h2>Stack</h2>
          <ul style={ { fontSize: '2rem', display: 'flex', gap: '10px', listStyle: 'none' } }>
            <li style={ { color: '#f0db4f' } }><SiJavascript /></li>
            <li style={ { color: '#61dbfb' } }><SiReact /></li>
            <li style={ { color: '#cf5a37' } }><SiJest /></li>
            <li style={ { color: '#fa5959' } }><SiTestinglibrary /></li>
            <li style={ { color: '#764abc' } }><SiRedux /></li>
            <li style={ { color: '#563d7c' } }><SiBootstrap /></li>
            <li style={ { color: '#264de4' } }><SiCss3 /></li>
            {/* <li><SiPhp /></li>
            <li><SiCodeigniter /></li>
            <li><SiLaravel /></li> */}
            <li style={ { color: '#0db7ed' } }><SiDocker /></li>
            <li style={ { color: '#00758f' } }><SiMysql /></li>
          </ul>
        </section>
        <section>
          <h2>Sobre mim</h2>
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
