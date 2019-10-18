import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import {Link, withStyles} from "@material-ui/core";
import { styles } from "./styles";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Divider from '@material-ui/core/Divider';

const AboutPage = (props) => {
  const { classes } = props;
  return (
    <div className={classes.layout}>
      <CssBaseline/>
      <Typography component="h1" variant="h3">
        Quem Somos
      </Typography>
      <br/>

      <Typography component='p' variant='subtitle1'>
        Data Science, ou Ciência de Dados, é uma área de conhecimento que engloba diversas técnicas de análises e de desenvolvimento de sistemas computacionais com a capacidade de produzir resultados para apoio e tomada de decisão, à medida em que acumulam experiência por meio da observação de dados.
      </Typography>
      <br/>

      <Typography component='p' variant='subtitle1'>
        O <strong> Núcleo de Estudos de Data Science (NDS) </strong> foi criado em 2018 como iniciativa das escolas da FGV SP com o intuito de realizar, aprofundar e disseminar pesquisas e estudos, bem como colaborar com a formação educacional, voltados para ciência de dados aplicada a administração, direito, economia, e ciências sociais, de forma a contribuir para o crescimento e aprimoramento de empresas, governo, e organizações como um todo.
      </Typography>
      <br/>

      <Typography component='p' variant='subtitle1'>
        Fazem parte das atividades do núcleo:
      </Typography>
      <ul>
        <li>Reuniões mensais para discussão de estudos e aplicações;</li>
        <li>Cursos de aperfeiçoamento;</li>
        <li>Apoio à ênfase de Data Science do Mestrado Profissional em Engenharia Financeira;</li>
        <li>Pesquisas aplicadas;</li>
        <li>Intercâmbio com instituições de ensino e pesquisa;</li>
        <li>Encontro Brasileiro de Data Science;</li>
        <li>Organização de seminários.</li>
      </ul>
      <br/>

      <Typography component='p' variant='subtitle1'>
        Dentre os temas e tecnologias abordados pelo NDS estão:
      </Typography>
      <ul>
        <li>Big Data Analytics e Deep Learning;</li>
        <li>Inteligência Computacional e Aprendizagem de Máquina (Machine Learning);</li>
        <li>Inteligência Artificial (AI – Artificial Intelligence);</li>
        <li>Processamento de Linguagem Natural (NLP – Natural Language Processing);</li>
        <li>Geoinformação e Estatística Espacial (GeoAnalytics);</li>
        <li>Internet das Coisas (IoT – Internet of Things);</li>
        <li>Segurança e Proteção de Dados;</li>
        <li>Análise e Visualização de Dados (Data Analytics and Visualization);</li>
        <li>Computação na Nuvem (Cloud Computing);</li>
        <li>Temas correlatos: Linguagens de programação e ferramentas específicas , Computação na Nuvem, Data Mining, Text Mining, Web Scrapping, etc.</li>
      </ul>

      <br/>

      <Typography component='p' variant='subtitle1' gutterBottom>
        Para conhecer mais sobre as atividades e novidades do núcleo de estudos envie e-mail para <a href = "mailto: nds@fgv.br">nds@fgv.br</a>
      </Typography>

      <Divider style={{marginTop: 16, marginBottom: 32}}/>

      <Typography component="h1" variant="h3" gutterBottom>
        Quadro de Pesquisadores
      </Typography>

      <Typography component="h1" variant="h5" gutterBottom>
        Professores da FGV
      </Typography>

      <ul>
        <li><Link href="https://eesp.fgv.br/integrante/afonso-de-campos-pinto">Afonso de Campos Pinto (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/5511026147289005">Alessandro Martim Marques (EESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/en/faculty/andre-luiz-silva-samartini">André Luiz Silva Samartini (EAESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/en/faculty/eduardo-rezende-francisco">Eduardo Francisco Rezende (EAESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/6731656353508097">Edson Caoru Kitani (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/6713612445238215">Élia Yathie Matsumoto (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/1850958104170690">Gerson de Souza Faria (EESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/professor/gustavo-correa-mirapalheta">Gustavo Correa Mirapalheta (EAESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/professor/hitoshi-nagano">Hitoshi Nagano (EAESP-FGV)</Link></li>
        <li><Link href="https://eaesp.fgv.br/professor/joao-luiz-chela">João Luiz Chela (EAESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/luis-meloni">Luís Meloni (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/1728809112622416">Luiz Henrique Moraes da Silva (EESP-FGV)</Link></li>
        <li><Link href="#">Mauricio Irie (EESP-FGV)</Link></li>
        <li><Link href="http://lattes.cnpq.br/1484408005536961">Paulo do Canto Hubert Junior (EAESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/paulo-picchetti">Paulo Picchetti (EESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/ricardo-pereira-masini">Ricardo Pereira Masini (EESP-FGV)</Link></li>
        <li><Link href="https://eesp.fgv.br/integrante/ricardo-ratner-rochman">Ricardo Ratner Rochman (EESP-FGV)</Link></li>
        <li><Link href="#">Roberto Barbosa Cintra (EESP-FGV)</Link></li>
      </ul>

      <Typography component="h1" variant="h5" gutterBottom>
        Doutorandos e Mestrandos
      </Typography>
      
      <ul>
        <li><Link href="http://lattes.cnpq.br/8726320988786268">Adriana Bezerra Bessa (EESP-FGV)</Link></li>
      </ul>

        <Typography component="h1" variant="h5" gutterBottom>
            Alumni
        </Typography>

        <ul>
            <li>Greta Juipato</li>
        </ul>

      <Typography component="h1" variant="h5" gutterBottom>
        Alunos de Graduação
      </Typography>

      <ul>
        <li>Alex Akira Okuno (EESP-FGV)</li>
        <li>Gustavo Grivol (EESP-FGV)</li>
        <li>Igor Peressinotto (EESP-FGV) - Assistente (apoio operacional)</li>
        <li>Tadeu Lara (EESP-FGV) - Assistente (website e canais de comunicação)</li>
      </ul>
      
    </div>
  );
};

AboutPage.propTypes = {

};

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: '@@reduxFirestore/CLEAR_DATA' })
  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(),
)(AboutPage)