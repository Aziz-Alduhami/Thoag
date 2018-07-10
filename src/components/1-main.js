import React, { Component } from 'react'
import styled from "styled-components";

import Modal from './modal'
import {Button, H1} from '../styles/Mystyles'
import BgImg from '../images/bgImage.jpg'
import AppleIcon from '../images/icons8-apple-filled-50.png'
import AndroidIcon from '../images/icons8-android-os-52.png'
import AppleAppStoreImage from '../images/main/App_Store_Badge_EN.svg'
import GooglePlayImage from '../images/main/google-play-badge-EN.png'


/* Depending on the brower language choose on the two objects */
const ArabicHTML = {main_text:"منصة ذوق عبارة عن شركة رائدة ومختصة بتنسيق ولائم الحفلات والمناسبات في المملكة",
                  sub_text: "نمكنكم من الطلب من مقدمي الخدمة بكل سهولة",
                  button_getPrice: "احصل على التسعيرة مجانا",
                  button_iOS:"حمل تطبيق iOS",
                  button_Android: "حمل تطبيق Android"};

const EnglishHTML = {main_text:" THOAG IS A CREATIVE CATERING LISTING COMPANY IN SAUDI ARABIA",
                  sub_text: "We enable ordering from quality caterers",
                  button_getPrice: "Get your free quotation",
                  button_iOS:"App Store",
                  button_Android: "Google Play"};

/* APPS URLS */
const iOS_URL = "https://itunes.apple.com/sa/app/thoag-%D8%B0%D9%88%D9%82/id1344937327?mt=8";
const Android_URL = ""
;


/* Main component */
export default class Main extends Component {
  /* props: isRTL  */
  constructor(props){
    super(props);
    this.state = {
      isMainStateRTL: this.props.isRTL,
      display: false,
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isMainStateRTL: nextProps.isRTL });
  }
  openModal(event) {
    this.setState({ display: true });
  }
  closeModal(event){
    this.setState({ display: false });
  }
  render() {
    if(this.state.isMainStateRTL){
      return(
        <MainContainer id="main" isRTL={this.state.isMainStateRTL}>
            <TextContainer>
              <H1>{ArabicHTML.main_text}</H1>
              <MainSubText>{ArabicHTML.sub_text}</MainSubText>
            </TextContainer>
          <BtnQuotation onClick={this.openModal}>
            {ArabicHTML.button_getPrice}
          </BtnQuotation>
          <ModalContainer display={this.state.display} isRTL={this.state.isMainStateRTL}>
            <MContent>
              <Close onClick={this.closeModal} isRTL={this.state.isMainStateRTL}>&times;</Close>
                <Modal isRTL={this.state.isMainStateRTL}/>
            </MContent>
          </ModalContainer>
          <ButtonsGroup isRTL={this.state.isMainStateRTL}>
            <a href={iOS_URL} target="_blank">
              <Button src={AppleAppStoreImage}></Button></a>
            {" "}
            <a href={Android_URL} target="_blank">
              <Button src={GooglePlayImage}></Button></a>
          </ButtonsGroup>
        </MainContainer>
      )
    }
    else{
      return(
        <MainContainer id="main" isRTL={this.state.isMainStateRTL}>
            <TextContainer>
              <H1>{EnglishHTML.main_text}</H1>
              <MainSubText>{EnglishHTML.sub_text}</MainSubText>
            </TextContainer>
          <BtnQuotation onClick={this.openModal}>{EnglishHTML.button_getPrice}</BtnQuotation>
          <ModalContainer display={this.state.display} isRTL={this.state.isMainStateRTL}>
            <MContent >
              <Close onClick={this.closeModal} isRTL={this.state.isMainStateRTL} >&times;</Close>
                <Modal isRTL={this.state.isMainStateRTL}/>
            </MContent>
          </ModalContainer>
          <ButtonsGroup isRTL={this.state.isMainStateRTL}>
            <a href={iOS_URL} target="_blank">
              <Button src={AppleAppStoreImage}></Button></a>
            {" "}
            <a href={Android_URL} target="_blank">
              <Button src={GooglePlayImage}></Button></a>
          </ButtonsGroup>
        </MainContainer>
      )
    }
  }
}

/* CSS Styled Components Only Below this comment*/
const MainContainer = styled.section`
    background:       linear-gradient( rgba(33, 37, 41, 0.65), rgba(33, 37, 41, 0.55) ), url(${BgImg}) no-repeat;
    background-size:  cover;
    direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
    text-align:       center;
    z-index:          -1;

`;

const TextContainer = styled.div`
    display:          inline-block;
    left:             0;
    padding-top:      15%;
    position:         relative;
    width:            100%;
    top:              50%;
    @media screen and (max-width: 500px) {
        top:              14vh;
        position:         relative;
        padding-right:    3%;
        padding-left:     3%;
    }
`;

// const MainText = styled.h1`
//     color:            white;
//     display:          inline-block;
//     font-family:      "Noto Sans", sans-serif;
//     font-size:        x-large;
//     font-weight:      600;
//     left:             0;       
//     text-transform:   uppercase;      

// `;

const MainSubText = styled.p`
    color:            white;
    font-family:      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ;
    font-size:        large;
`;

const BtnQuotation = styled.button`
    /*Text */
    color:            white;
    font-size:        large;
    font-weight:      600;
    /*Bg and Border */
    background-color: rgb(193, 35, 54);
    border:           none;
    border-radius:    3px;
    /* Size */
    margin-bottom:    100px;
    width:            260px;
    height:           50px;
    /* Effects */
    text-transform:   uppercase;
    transition:       background-color 0.5s ease;
    &:hover{
      background-color: #db0620;
    }
    @media screen and (max-width: 500px) {
        top:              14vh;
        position:         relative;
        width:            80%;
    }
`;

const ButtonsGroup = styled.div`
    padding:          1.5%;
    text-align:       ${props => props.isRTL? "left" : "right"};
    @media screen and (max-width: 500px) {
      text-align:       center;
      
    }
`;

// const Button = styled.img`
//     /* Size */
//     max-width:15%;
//     max-height:15%;
//     width: auto;
//     height: auto;
//     /* Effects */
//     opacity: 0.6;
//     transition: opacity 0.5s ease;
//     &:hover{
//        opacity: 1;
//     }
//     @media screen and (max-width: 500px) {
//         top:              1.5vh;
//         position:         relative;
//         max-width:        40%;
//         max-height:       40%;
//         width:            auto;
//         height:           auto;
//     }
// `;
// const BtniOS = styled.button`
//     direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
//     opacity: 0.6;
//     color:rgb(33, 33, 33);
//     width: 220px;
//     height: 50px;
//     position: relative;
//     font-size: 1.1em;
//     font-weight: 600;
//     padding: 9px 15px 7px 50px;   
//     background: url(${AppleIcon});
//     background-color: #ffffff;
//     background-size: 37px;
//     background-position: 8px 6px;
//     background-repeat: no-repeat;
//     border: none;
//     border-radius: 3px;
//     transition: opacity 0.5s ease;
//     &:hover{
//       opacity: 1;
//     }
//     &:hover, &:visited, &:link, &:active{
//       text-decoration: none;
//     }
// `;
// const BtnAndroid = styled.img`
//     /* Size */
//     max-width:15%;
//     max-height:15%;
//     width: auto;
//     height: auto;
//     /* Effects */
//     opacity: 0.6;
//     transition: opacity 0.5s ease;
//     &:hover{
//        opacity: 1;
//     }
// `;



const ModalContainer = styled.div`
  text-align: center;
  display: none; 
  position: fixed; 
  z-index: 10000;
  padding-top: 100px;
  padding-left: 10%;
  padding-right: 10%;
  border: none;

  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;

  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); 
  transition: background-color 0.5s ease;
  display:  ${props => props.display? "block" : "none"}
`;

const MContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const Close = styled.span`
  color: #aaaaaa;
  float: ${props => props.isRTL? "left" : "right"};
  font-size: 28px;
  font-weight: bold;

  &:hover,&:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;