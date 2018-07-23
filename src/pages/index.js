import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
/**Components */
import Nav from '../components/0-nav'
import Main from '../components/1-main'
import About from '../components/2-about'
import AppPreview from '../components/3-app_preview'
import FAQ from '../components/4-faq'
import JoinUs from '../components/5-join_us'
import Footer from '../components/6-footer'
import styled from "styled-components"

//Index component: it the container of all other components
export default class IndexPage extends Component {
  //State: isRTL --> indicates if the language selected is 'Right to left' or not
  //Props: none
  constructor(props){
    super(props);
    this.state = {
      isRTL: true,
    }
    console.log("Index: ");
    console.log(this.state);
    console.log(this.props);
  }
  
  changeToEnglish = () =>{this.setState({isRTL: false})}
  changeToArabic  = () =>{this.setState({isRTL: true})}

  render() {
    return (
      <div>
        <Nav          {...this.state} changeToEnglish={this.changeToEnglish} changeToArabic={this.changeToArabic}/>
        <Main         {...this.state}/>
        <About        {...this.state}/>
        <AppPreview   {...this.state}/>
        <FAQ          {...this.state}/>
        <JoinUs       {...this.state}/>
        <Footer       {...this.state}/>
      </div>
    )
  }
}