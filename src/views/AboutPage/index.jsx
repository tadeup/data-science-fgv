import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";

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
        <li>Big Data;</li>
        <li>Inteligência Computacional e Aprendizagem de Máquina (Machine Learning);</li>
        <li>Inteligência Artificial (AI – Artificial Intelligence);</li>
        <li>Processamento de Linguagem Natural (NLP – Natural Language Processing);</li>
        <li>Internet das Coisas (IoT – Internet of Things);</li>
        <li>Análise de Dados (Data Analytics);</li>
        <li>Visualização de Dados (Data Visualization);</li>
        <li>Computação na Nuvem (Cloud Computing);</li>
        <li>Linguagens de programação e ferramentas específicas;</li>
        <li>Temas correlatos: Data Mining, Web Scrapping, Deep Learning, Estruturação e Limpeza de Dados, etc.</li>
      </ul>
      <br/>

      <Typography component='p' variant='subtitle1'>
        Para conhecer mais sobre as atividades e novidades do núcleo de estudos envie e-mail para <a href = "mailto: nds@fgv.br">nds@fgv.br</a>
      </Typography>

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