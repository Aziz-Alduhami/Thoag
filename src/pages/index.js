import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
/**Components */
import Nav from '../components/0-nav'
import Main from '../components/1-main'
import About from '../components/2-about'
import AppPreview from '../components/3-app_preview'
import FAQ from '../components/4-faq'
import JoinUs from '../components/5-join_us'
import Footer from '../components/6-footer'

//Index component: it the container of all other components
export default class IndexPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Nav/>
          <Main/>
          <About/>
          <AppPreview/>
          <FAQ/>
          <JoinUs/>
          <Footer/>
        </div>
      </Provider>
    )
  }
}