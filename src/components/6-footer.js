import React, { Component } from 'react'
import styled from "styled-components"

const ArabicHTML = "©جميع حقوق العرض محفوضة لمنصة ذوق ٢٠١٨ 2018"
const EnglishHTML = "©Copyright 2018 Thoag All Rights Reserved";

export default class Footer extends Component {
  /* props: isRTL  */
  constructor(props){
    super(props);
    this.state = {
      isFooterStateRTL: this.props.isRTL,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isFooterStateRTL: nextProps.isRTL });
  }

  render() {
    return (
      <FooterContainer isRTL={this.state.isFooterStateRTL}>
      <Hr />
        <p>{this.state.isFooterStateRTL? ArabicHTML : EnglishHTML}</p>
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.section`
  color: #626262;
  background: #1a1a1a;
  padding-right: 10%;
  padding-left: 10%;
  height: 200px;

  text-align: ${props => props.isRTL ? 'right' : 'left'};
`;

const Hr = styled.hr`
  border-color: #C12336;
  background-color: #C12336;
  height:5px;
`;