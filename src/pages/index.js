import React, { Component } from 'react'
// import Link from 'gatsby-link'
// import Navigation from '../components/0-navigation'
import Main from '../components/1-main'
import About from '../components/2-about'
import AppPreview from '../components/3-app_preview'
import FAQ from '../components/4-faq'
import JoinUs from '../components/5-join_us'
import Footer from '../components/6-footer'
import styled from "styled-components"
import LogoImage from '../images/logo.png'


const ArabicHTML = {home:"الرئيسية" , about: "من نحن" , faq:"أسئلة شائعة" ,app_preview: "مميزات التطبيق", joinUs: "انضمام مقدمي الخدمة", english: "English", arabic: "عربي"};
const EnglishHTML = {home:"Main" , about: "About Us" , faq:"FAQ" ,app_preview: "App Features", joinUs: "Join Us",english: "English", arabic: "عربي"};


export default class IndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrolling: false,
      isIndexStateRTL: false,
      display: false,
    }
    // console.log("index: isIndexStateRTL: " + this.state.isIndexStateRTL);
    this.handleScroll = this.handleScroll.bind(this);
    this.changeToLTR  = this.changeToLTR.bind(this);
    this.changeToRTL  = this.changeToRTL.bind(this);
    this.changeNav  = this.changeNav.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if (window.scrollY < 90 && this.state.scrolling === true) {
        this.setState({scrolling: false});       
    }
    if (window.scrollY > 90 && this.state.scrolling !== true) {
        this.setState({scrolling: true});
    }
  }
  changeToLTR(){
    this.setState({isIndexStateRTL: false});
  }
  changeToRTL(){
    this.setState({isIndexStateRTL: true});
  }
  changeNav(event) {
    this.setState({ display: !this.state.display });
  }
  render() {
    return (
      <div>
        <Nav scrolling={this.state.scrolling} display={this.state.display}>
          <a href="#main"><Img  isRTL={this.state.isIndexStateRTL} scrolling={this.state.scrolling}/></a>
          <Right isRTL={this.state.isIndexStateRTL}>
            <Close onClick={this.changeNav} isRTL={this.state.isMainStateRTL} >PRESS</Close>
            <A  onClick={this.changeToRTL}  isRTL={this.state.isIndexStateRTL}>{EnglishHTML.arabic}</A>
            <A  onClick={this.changeToLTR}  isRTL={this.state.isIndexStateRTL}>{EnglishHTML.english}</A>
            <A  href="#join-us"             isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.joinUs : EnglishHTML.joinUs}</A>
            <A  href="#app-preview"         isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.app_preview: EnglishHTML.app_preview}</A>
            <A  href="#faq"                 isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.faq : EnglishHTML.faq}</A>
            <A  href="#about"               isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.about : EnglishHTML.about}</A>
            <A  href="#main"                isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.home : EnglishHTML.home }</A>
          </Right>
        </Nav>
        
        <Main         isRTL={this.state.isIndexStateRTL}/>
        <About        isRTL={this.state.isIndexStateRTL}/>
        <AppPreview   isRTL={this.state.isIndexStateRTL}/>
        <FAQ          isRTL={this.state.isIndexStateRTL}/>
        <JoinUs       isRTL={this.state.isIndexStateRTL}/>
        <Footer       isRTL={this.state.isIndexStateRTL}/>
      </div>
    )
  }
}



const Nav = styled.div`
  box-sizing:         border-box;
  padding:            5px 10%;
  max-height:         ${props => props.scrolling? "50px" : "200px"};
  transition:         max-height 0.25s ease-in;
  overflow:           hidden;
  position:           fixed;
  width:              100%;
  top:                0;
  z-index:            10;
  transition:         background-color 0.5s ease;
  background-color:   ${props => props.scrolling? "rgb(33, 37, 41)" : "rgba(0,0,0,0)"};

  @media screen and (max-width: 500px) {
    position: fixed;
    float: none;
    display: block;
    text-align: center;
    background-color: black;
    max-height: ${props => props.display? "400px" : "50px"};
  }
`;
const Img = styled.img.attrs({
  src:                LogoImage,
})`
  max-height:         ${props => props.scrolling? "45px" : "200px"};
  transition:         max-height 0.1s ease-in;
  float:              ${props => props.isRTL ? 'right' : 'left'};

  @media screen and (max-width: 1100px){
    max-height:         ${props => props.scrolling? "45px" : "60px"};
  }
  @media screen and (max-width: 800px){
    display: none;
  }
`;

const Right = styled.div`
  box-sizing:         border-box;
  float:              ${props => props.isRTL ? 'left' : 'right'};
  direction:          ${props => props.isRTL ? 'rtl' : 'ltr'};

  @media screen and (max-width: 500px) {
    float: none;
    display: block;
  }
`;

const A = styled.a`
  float:              ${props => props.isRTL ? 'left' : 'right'};
  box-sizing:         border-box;
  color:              black;
  text-align:         center;
  padding:            10px;
  text-decoration:    none;

  font-size: medium; /** combine */

  background-color: ${props => props.active ? 'rgb(193, 35, 54)' : 'rgba(0,0,0,0)'};
  color: ${props => props.active ?            'rgb(193, 35, 54)' : 'white'};

  &:hover{
    color:            rgb(193, 35, 54);
  }

  @media screen and (max-width: 500px) {
    float: none;
    display: block;
    text-align: ${props => props.isRTL ? 'left' : 'right'};
  }
`;

// const Button = styled.button`
//   box-sizing:   border-box;
//   float:        ${props => props.isRTL ? 'left' : 'right'};
//   background-color: ${props => props.active ? 'rgb(193, 35, 54)' : 'rgba(0,0,0,0)'};
//   color: ${props => props.active ?            'rgb(193, 35, 54)' : 'white'};
//   text-align:   center;
//   padding:      12px;
//   text-decoration: none;

//   border:       none;
//   border-radius: 3px;
// `;


const Close = styled.span`
    color:              rgb(170, 170, 170);
    float:              ${props => props.isRTL? "left" : "right"};
    font-size:          xx-large;
    font-weight:        bold;

    display: none;
    
    &:hover,&:focus {
      color:               Red;
      text-decoration:     none;
      cursor:              pointer;
    }
    @media screen and (max-width: 500px) {
      display: initial;
      position: absolute;
    right: 0;
    top: 0;
    }
`;