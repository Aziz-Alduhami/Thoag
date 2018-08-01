import React, { Component } from 'react'
/*Redux */
import {connect} from 'react-redux'
/*actions */
import {changeLanguage} from '../redux/actions/actions'
/*Binds dispatch to an action */
import {bindActionCreators} from 'redux';
/* Components */
import {Nav,Img,Right,A,Close} from '../styles/0-nav-Styled'



/* Depending on the brower language choosen on the two objects */
const ArabicHTML = {home:"الرئيسية" , about: "من نحن" , faq:"أسئلة شائعة" ,app_preview: "مميزات التطبيق", joinUs: "انضمام مقدمي الخدمة"};
const EnglishHTML= {home:"Main" , about: "About Us" , faq:"FAQ" ,app_preview: "App Features", joinUs: "Join Us"};


//Navigation component: the Nav bar
export class Navigation extends Component {
  //State: isScrolling --> indicates if the user is scrolling, isSmallScren --> indicaes if the screen is less than 500px wide
  //Props: isRTL and function changelanguage from store
  constructor(props){
    super(props);
    this.state ={
      isScrolling: false,
      openNav: false,
    }
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
    this.setState({ openNav: !this.state.openNav });
  }
  render() {
    let NavHTML = (this.props.isRTL)? ArabicHTML : EnglishHTML;
    return (
        <Nav {...this.props}{...this.state}>
          <A href="#main"><Img {...this.props}{...this.state} /></A>
          <Right {...this.props}>
            <Close {...this.props} onClick={this.handleSmallScreen} > ">" </Close>
            <A  {...this.props} href="#main"       >{NavHTML.home }</A>
            <A  {...this.props} href="#about"      >{NavHTML.about}</A>
            <A  {...this.props} href="#app-preview">{NavHTML.app_preview}</A>
            <A  {...this.props} href="#join-us"    >{NavHTML.joinUs}</A>
            <A  {...this.props} href="#faq"        >{NavHTML.faq}</A>
            <A  {...this.props} onClick={() => this.props.changeLanguage(true)}  >العربية</A>
            <A  {...this.props} onClick={() => this.props.changeLanguage(false)} >English</A>
          </Right>
        </Nav>
    )
  }
}


//
const mapStateToProps = (state) => ({
	isRTL: state.isRTL,
});
const mapDispatchToProps = (dispatch) => ({
	changeLanguage: bindActionCreators(changeLanguage, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);