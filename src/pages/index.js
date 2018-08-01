import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
/**Components */
import Nav from '../components/0-nav'
import Main from '../components/1-main'
import About from '../components/2-about'
import AppPreview from '../components/3-app_preview'
import Partners from '../components/4-partners'
import FAQ from '../components/5-faq'
import JoinUs from '../components/6-join_us'
import Footer from '../components/7-footer'

import { ChasingDots } from 'styled-spinkit'

//IndexPage component: it the container of all other components
export default class IndexPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Nav/>
          <Main/>
          <About/>
          <AppPreview/>
          <Partners />
          <JoinUs/>
          <FAQ/>
          <Footer/>
        </div>
      </Provider>
    )
  }
}