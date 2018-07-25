import React, { Component } from 'react'
import styled from "styled-components";
import {connect} from 'react-redux'
/**Components */
import Modal from './modal'
import {ImgButton, H1, P} from '../styles/Mystyles'
/**Images */
import BgImg from '../images/main/bgImage.jpg'
import AppleAppStoreImage from '../images/main/App_Store_Badge_EN.svg'
import GooglePlayImage from '../images/main/google-play-badge-EN.png'


/* Depending on the brower language choose on the two objects */
const ArabicHTML = {main_text:"منصة ذوق عبارة عن شركة رائدة ومختصة بتنسيق ولائم الحفلات والمناسبات في المملكة",
                  sub_text: "نمكنكم من الطلب من مقدمي الخدمة بكل سهولة",
                  button_getPrice: "احصل على التسعيرة مجانا",};

const EnglishHTML = {main_text:" THOAG IS A CREATIVE CATERING LISTING COMPANY IN SAUDI ARABIA",
                  sub_text: "We enable ordering from quality caterers",
                  button_getPrice: "Get your free quotation",};

/* APPS STORES URLS */
const iOS_URL = "https://itunes.apple.com/sa/app/thoag-%D8%B0%D9%88%D9%82/id1344937327?mt=8";
const Android_URL = "";

//Main component
class MainSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
    }
    this.openModal  = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(event) {
    this.setState({ isModalOpen: true });
  }
  closeModal(event){
    this.setState({ isModalOpen: false });
  }
  render() {
    return(
      <Main id="main"   {...this.props}>
        <TextContainer>
          <Text         >{this.props.isRTL? ArabicHTML.main_text : EnglishHTML.main_text}</Text>
          <SubText      >{this.props.isRTL? ArabicHTML.sub_text  : EnglishHTML.sub_text}</SubText>
        </TextContainer>
        <BtnQuotation   onClick={this.openModal}>
          {this.props.isRTL? ArabicHTML.button_getPrice : EnglishHTML.button_getPrice}
        </BtnQuotation>
        <ModalContainer {...this.state} {...this.props}>
          <MContent>
            <Close      {...this.props} onClick={this.closeModal}>&times;</Close>
              <Modal    {...this.props}/>
          </MContent>
        </ModalContainer>
        <ButtonsGroup   {...this.props}>
          <a target="_blank" href={iOS_URL}>
            <ImgButton src={AppleAppStoreImage}></ImgButton></a>
          {" "}
          <a target="_blank" href={Android_URL}>
            <ImgButton src={GooglePlayImage}></ImgButton></a>
        </ButtonsGroup>  
      </Main>
      )
  }
}


const Main = styled.section`
    background:       linear-gradient( rgba(33, 37, 41, 0.65), rgba(33, 37, 41, 0.55) ), url(${BgImg}) no-repeat;
    background-size:  cover;
    direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
    text-align:       center;
    z-index:          -1;
    padding-top:      100px;
    margin-top:       -100px;
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

 const Text = styled(H1)`
    color:          white;
 `;

 const SubText = styled(P)`
    color:          white;
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
      text-align:         center;
      
    }
`;


const ModalContainer = styled.div`
    text-align:         center;
    display:            none; 
    position:           fixed; 
    z-index:            10;
    padding-top:        100px;
    padding-left:       10%;
    padding-right:      10%;
    border:             none;

    left:               0;
    top:                0;
    width:              100%; 
    height:             100%;

    overflow:           auto; 
    background-color:   rgb(0,0,0);
    background-color:   rgba(0,0,0,0.4); 
    transition:         background-color 0.5s ease;
    display:            ${props => props.isModalOpen? "block" : "none"};
    @media screen and (max-width: 500px) {
      padding-left:       5%;
      padding-right:      5%;
    }
`;

const MContent = styled.div`
    background-color:   #fefefe;
    margin:             auto;
    padding:            20px;
    border:             none;
    border-radius:      3px;
    width:              80%;
    @media screen and (max-width: 500px) {
      width:              100%;
      padding:            0;
    }
`;

const Close = styled.span`
    color:              rgb(170, 170, 170);
    float:              ${props => props.isRTL? "left" : "right"};
    font-size:          xx-large;
    font-weight:        bold;

    &:hover,&:focus {
      color:               black;
      text-decoration:     none;
      cursor:              pointer;
    }
    @media screen and (max-width: 500px) {
      font-size:           xx-large;
      padding-right:       2vw;
      padding-left:        2vw;
    }
`;


const mapStateToProps = (state) => ({
	isRTL: state.isRTL,
});

export default connect(mapStateToProps)(MainSection);