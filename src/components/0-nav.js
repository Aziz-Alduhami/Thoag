import React, { Component } from 'react'
import styled from "styled-components";
/**Images */
import LogoImage from '../images/nav/logo1.png'

/* Depending on the brower language choosen on the two objects */
const ArabicHTML = {home:"الرئيسية" , about: "من نحن" , faq:"أسئلة شائعة" ,app_preview: "مميزات التطبيق", joinUs: "انضمام مقدمي الخدمة", english: "English", arabic: "العربية"};
const EnglishHTML = {home:"Main" , about: "About Us" , faq:"FAQ" ,app_preview: "App Features", joinUs: "Join Us",english: "English", arabic: "العربية"};


//Navigation component: the Nav bar
export default class Navigation extends Component {
  //State: isScrolling --> indicates if the user is scrolling, isSmallScren --> indicaes if the screen is less than 500px wide
  //Props: isRTL from Index
  constructor(props){
    super(props);
    this.state ={
      isScrolling: false,
      isSmallScreen: false,
    }
    console.log("Nav: ");
    console.log(this.state);
    console.log(this.props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY < 90 && this.state.isScrolling === true) {
        this.setState({isScrolling: false});       
    }
    if (window.scrollY > 90 && this.state.isScrolling !== true) {
        this.setState({isScrolling: true});
    }
  }
  handleSmallScreen = () => {
    this.setState({ isSmallScreen: !this.state.isSmallScreen });
  }
  render() {
    return (
        <Nav {...this.props}{...this.state}>
          <a href="#main">
            <Img  {...this.props}{...this.state} />
          </a>
          <Right {...this.props}{...this.state}>
            <Close onClick={this.handleSmallScreen} {...this.props}{...this.state}> ">" </Close>
            <A  {...this.props}{...this.state} onClick={this.props.changeToArabic}  >{EnglishHTML.arabic}</A>
            <A  {...this.props}{...this.state} onClick={this.props.changeToEnglish} >{EnglishHTML.english}</A>
            <A  href="#join-us"       {...this.props}{...this.state}>{this.props.isRTL? ArabicHTML.joinUs : EnglishHTML.joinUs}</A>
            <A  href="#app-preview"   {...this.props}{...this.state}>{this.props.isRTL? ArabicHTML.app_preview: EnglishHTML.app_preview}</A>
            <A  href="#faq"           {...this.props}{...this.state}>{this.props.isRTL? ArabicHTML.faq : EnglishHTML.faq}</A>
            <A  href="#about"         {...this.props}{...this.state}>{this.props.isRTL? ArabicHTML.about : EnglishHTML.about}</A>
            <A  href="#main"          {...this.props}{...this.state}>{this.props.isRTL? ArabicHTML.home : EnglishHTML.home }</A>
          </Right>
        </Nav>
    )
  }
}



const Nav = styled.div`
  box-sizing:         border-box;
  padding:            5px 10%;
  max-height:         ${props => props.isScrolling? "50px" : "200px"};
  transition:         max-height 0.25s ease-in;
  overflow:           hidden;
  position:           fixed;
  width:              100%;
  top:                0;
  z-index:            10;
  transition:         background-color 0.5s ease;
  background-color:   ${props => props.isScrolling? "rgb(33, 37, 41)" : "rgba(0,0,0,0)"};


  @media screen and (max-width: 500px) {
    position: fixed;
    float: none;
    display: block;
    text-align: center;
    background-color: black;
    max-height: ${props => props.isSmallScreen? "400px" : "50px"};
  }
`;
const Img = styled.img.attrs({
  src:                LogoImage,
})`
  max-height:         ${props => props.isScrolling? "42px" : "90px"};
  transition:         max-height 0.1s ease-in;
  float:              ${props => props.isRTL ? 'right' : 'left'};

  @media screen and (max-width: 1100px){
    max-height:         ${props => props.isScrolling? "45px" : "60px"};
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