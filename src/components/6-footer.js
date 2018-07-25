import React, { Component } from 'react'
import styled from "styled-components"
import {connect} from 'react-redux';


const ArabicHTML = "©جميع حقوق العرض محفوضة لمنصة ذوق ٢٠١٨ 2018"
const EnglishHTML = "©Copyright 2018 Thoag All Rights Reserved";

class Footer extends Component {
  //State: none
  //Props: isRTL from Index
  render() {
    return (
      <FooterContainer isRTL={this.props.isRTL}>
        <Hr />
        <hr />
        <p>{this.props.isRTL? ArabicHTML : EnglishHTML}</p>
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.section.attrs({
  dir: props => props.isRTL ? 'rtl' : 'ltr'
})`
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  color:              #626262;
  background:         #1a1a1a;
  padding-right:      10%;
  padding-left:       10%;
  height:             200px;
  
  
`;

const Hr = styled.hr`

  border-color: #C12336;
  background-color: #C12336;
  height:5px;
`;

const mapStateToProps = (state) => ({
	isRTL: state.isRTL,
});

export default connect(mapStateToProps)(Footer);