import React, { Component } from "react";
import { connect } from "react-redux";
/**Components */
import Modal from "./1-modal";
import { ImgButton } from "../styles/GenericComponents";
/**Images */
import {Main,TextContainer,Text,SubText,BtnQuotation,ButtonsGroup,ModalContainer,MContent,Close} from "../styles/1-main-Styled";

import AppleAppStoreImage from "../images/main/App_Store_Badge_EN.svg";
import GooglePlayImage from "../images/main/google-play-badge-EN.png";

/* Depending on the brower language choose on the two objects */
const ArabicHTML = {
  main_text:
    "منصة ذوق عبارة عن شركة رائدة ومختصة بتنسيق ولائم الحفلات والمناسبات في المملكة",
  sub_text: "نمكنكم من الطلب من مقدمي الخدمة بكل سهولة",
  button_getPrice: "احصل على التسعيرة مجانا"
};

const EnglishHTML = {
  main_text: " THOAG IS A CREATIVE CATERING LISTING COMPANY IN SAUDI ARABIA",
  sub_text: "We enable ordering from quality caterers",
  button_getPrice: "Get your free quotation"
};

/* APPS STORES URLS */
const iOS_URL =
  "https://itunes.apple.com/sa/app/thoag-%D8%B0%D9%88%D9%82/id1344937327?mt=8";
const Android_URL = "";

//Main component
class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    
  }
  openModal(event) {
    this.setState({ isModalOpen: true });
  }
  closeModal(event) {
    this.setState({ isModalOpen: false });
  }
  render() {
    let MainHTML = (this.props.isRTL)? ArabicHTML : EnglishHTML;
    return (
      <Main id="main" {...this.props}>
        <TextContainer>
          <Text>{MainHTML.main_text}</Text>
          <SubText>{MainHTML.sub_text}</SubText>
        </TextContainer>
        <BtnQuotation onClick={this.openModal}>
          {MainHTML.button_getPrice}
        </BtnQuotation>
        <ModalContainer {...this.state} {...this.props}>
          <MContent>
            <Close {...this.props} onClick={this.closeModal}>
              &times;
            </Close>
            <Modal {...this.props} />
          </MContent>
        </ModalContainer>
        <ButtonsGroup {...this.props}>
          <a target="_blank" href={iOS_URL}>
            <ImgButton src={AppleAppStoreImage} />
          </a>{" "}
          <a target="_blank" href={Android_URL}>
            <ImgButton src={GooglePlayImage} />
          </a>
        </ButtonsGroup>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  isRTL: state.isRTL
});

export default connect(mapStateToProps)(MainSection);
