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


const ArabicHTML = {home:"الرئيسية" , about: "من نحن" , faq:"أسئلة شائعة" , joinUs: "انضمام مقدمي الخدمة", english: "English", arabic: "عربي"};
const EnglishHTML = {home:"Main" , about: "About Us" , faq:"FAQ" , joinUs: "Join Us",english: "English", arabic: "عربي"};


export default class IndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      scrolling: false,
      isIndexStateRTL: false,
    }
    // console.log("index: isIndexStateRTL: " + this.state.isIndexStateRTL);
    this.handleScroll = this.handleScroll.bind(this);
    this.changeToLTR  = this.changeToLTR.bind(this);
    this.changeToRTL  = this.changeToRTL.bind(this);
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

  render() {
    return (
      <div>
        <Nav      style={{backgroundColor: this.state.scrolling? "rgb(33, 37, 41)" : "rgba(0,0,0,0)"}}>
          <a href="">
            <Img  isRTL={this.state.isIndexStateRTL} src={LogoImage} 
                  style={{height: this.state.scrolling ? "80%" : "120%"}}/>
          </a>
          <Right isRTL={this.state.isIndexStateRTL}>
            <Button      onClick={this.changeToRTL} isRTL={this.state.isIndexStateRTL}>{EnglishHTML.arabic}</Button>
            <Button      onClick={this.changeToLTR} isRTL={this.state.isIndexStateRTL}>{EnglishHTML.english}</Button>
            <A  href="#join-us" isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.joinUs  : EnglishHTML.joinUs}</A>
            <A  href="#faq"     isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.faq     : EnglishHTML.faq}</A>
            <A  href="#about"   isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.about   : EnglishHTML.about}</A>
            <A  href="#main"    isRTL={this.state.isIndexStateRTL}>{this.state.isIndexStateRTL? ArabicHTML.home    : EnglishHTML.home }</A>
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
  box-sizing:   border-box;
  padding:      5px 10%;
  height:       50px;
  overflow:     hidden;
  position:     fixed;
  width:        100%;
  top:          0;
  z-index:      100;
  transition:   background-color 0.5s ease;

  @media screen and (max-width: 500px) {
    float: none;
    display: block;
    text-align: center;
    background-color: black;
  }
`;
const Img = styled.img`
  float:        ${props => props.isRTL ? 'right' : 'left'};
`;

const Right = styled.div`
  box-sizing:   border-box;
  float:        ${props => props.isRTL ? 'left' : 'right'};
  direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};

  @media screen and (max-width: 500px) {
    float: none;
  }
`;

const A = styled.a`
  box-sizing:   border-box;
  float:        ${props => props.isRTL ? 'left' : 'right'};
  direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
  color:        black;
  text-align:   center;
  padding:      12px;
  text-decoration: none;

  font-size: 18px; /** combine */

  background-color: ${props => props.active ? 'rgb(193, 35, 54)' : 'rgba(0,0,0,0)'};
  color: ${props => props.active ? 'rgb(193, 35, 54)' : 'white'};

  &:hover{
    color: rgb(193, 35, 54);
  }
  @media screen and (max-width: 500px) {
    float: none;
    display: block;
    text-align: left;
  }
`;

const Button = styled.button`
  box-sizing:   border-box;
  float:        ${props => props.isRTL ? 'left' : 'right'};
  direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
  color:        black;
  text-align:   center;
  padding:      12px;
  text-decoration: none;

  border:       none;
  border-radius: 3px;
  background:   white;
  color:        red;
`;