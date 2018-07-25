import React, { Component } from 'react'
import {changeLanguage} from '../redux/actions/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

/* Components */
import {Nav, Img, Right, Close, A} from '../styles/NavStyled'



/* Depending on the brower language choosen on the two objects */
const ArabicHTML = {home:"الرئيسية" , about: "من نحن" , faq:"أسئلة شائعة" ,app_preview: "مميزات التطبيق", joinUs: "انضمام مقدمي الخدمة"};
const EnglishHTML= {home:"Main" , about: "About Us" , faq:"FAQ" ,app_preview: "App Features", joinUs: "Join Us"};


//Navigation component: the Nav bar
export class Navigation extends Component {
  //State: isScrolling --> indicates if the user is scrolling, isSmallScren --> indicaes if the screen is less than 500px wide
  //Props: isRTL from Index
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
    return (
        <Nav {...this.props}{...this.state}>
          <a href="#main"><Img {...this.props}{...this.state}/>></a>
          <Right {...this.props}>
            <Close {...this.props} onClick={this.handleSmallScreen} > ">" </Close>
            <A  {...this.props} onClick={() => this.props.changeLanguage(true)}  >العربية</A>
            <A  {...this.props} onClick={() => this.props.changeLanguage(false)} >English</A>
            <A  {...this.props} href="#join-us"    >{this.props.isRTL? ArabicHTML.joinUs: EnglishHTML.joinUs}</A>
            <A  {...this.props} href="#app-preview">{this.props.isRTL? ArabicHTML.app_preview: EnglishHTML.app_preview}</A>
            <A  {...this.props} href="#faq"        >{this.props.isRTL? ArabicHTML.faq   : EnglishHTML.faq}</A>
            <A  {...this.props} href="#about"      >{this.props.isRTL? ArabicHTML.about : EnglishHTML.about}</A>
            <A  {...this.props} href="#main"       >{this.props.isRTL? ArabicHTML.home  : EnglishHTML.home }</A>
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