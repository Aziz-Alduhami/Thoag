import React, { Component } from 'react'
import {connect} from 'react-redux';

import {FooterContainer, Hr} from '../styles/7-footer-Styled'


const ArabicHTML = "©جميع حقوق العرض محفوضة لمنصة ذوق ٢٠١٨ 2018"
const EnglishHTML = "©Copyright 2018 Thoag All Rights Reserved";

class Footer extends Component {

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


const mapStateToProps = (state) => ({
	isRTL: state.isRTL,
});

export default connect(mapStateToProps)(Footer);