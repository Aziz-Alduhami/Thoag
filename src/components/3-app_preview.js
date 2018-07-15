import React, { Component } from 'react'
import styled from "styled-components";
import {P} from '../styles/Mystyles'

import Image_01 from '../images/app preview/1.png'
import Image_02 from '../images/app preview/2.png'
import Image_03 from '../images/app preview/3.png'
import Image_04 from '../images/app preview/4.png'
import Image_05 from '../images/app preview/5.png'
import Image_06 from '../images/app preview/6.png'



/* Depending on the brower language choose one of the two objects */
const ArabicHTML = [{number: "01" ,title:"احصل على أفضل الخيارات",content:"نحن نهتم بايجاد صفوة مميزة من التقديمات المختفلة"},
{number:"02",title:"تمتع بخدمة مريحة ذات سرعة عالية",content:"نحن نضمن تأكيد طلبك من قبل مقمي الخدمة بفعالية"},
{number:"03",title:"شاركنا رأيك",content:"من خلال التقييم لكل تجربة مع ذوق"},
{number:"04",title:"تتبع التحديثات",content:"الحصول على التنبيهات فورا تلقائيا"},
{number:"05",title:"ادفع بأمان و سلاسة",content:"لراحتكم فعلنا طرق دفع آمنة"},
{number:"06",title:"احصل على الدعم المباشر",content:"نحن على الدوم جاهزون لمساعدتكم من كل مكان في التطبيقات و الموقع"},
];

const EnglishHTML = [{number:"01",title:"Get the best catering options",content:"We deeply care to deliver quality caterers that match your needs"},
{number:"02",title:"High convenience and speed",content:"We ensure your order is confirmed by caterer effectively"},
{number:"03",title:"We value your opinion",content:"Always rate your catering experience"},
{number:"04",title:"Live tracking",content:"Always notified when order status is updated"},
{number:"05",title:"Only secure payment methods",content:"we enabled secure money transfer channels for your ease of mind"},
{number:"06",title:"Live support",content:"We are always ready to serve you in the apps and on our website"},
];


/* App Preview component */
export default class AppPreview extends Component {
  /* props: isRTL  */
  constructor(props){
    super(props);
    this.state = {
      isAppPreviewtStateRTL: this.props.isRTL,
      activeImage: 1,
    }
    this.changeImage = this.changeImage.bind(this);
  }
  // componentDidMount(){
  //   window.addEventListener("mouseover", this.handleHover);
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({ isAppPreviewtStateRTL: nextProps.isRTL });
  }

  changeImage(event){
    if(event.target.id === "F1"){
      this.setState({activeImage:'1'});
    }
    if(event.target.id === "F2"){
      this.setState({activeImage: '2'});
    }
    if(event.target.id === "F3"){
      this.setState({activeImage: '3'});
    }
    if(event.target.id === "F4"){
      this.setState({activeImage: '4'});
    }
    if(event.target.id === "F5"){
      this.setState({activeImage: '5'});
    }
    if(event.target.id === "F6"){
      this.setState({activeImage: '6'});
    }
  }
  render() {
    if(this.state.isAppPreviewtStateRTL){
      return(
        <Grid>
        <Feature_01 id="F1"
                    onMouseOver={this.changeImage} 
                    activeImage={this.state.activeImage}
                    isRTL={this.state.isAppPreviewtStateRTL}>
          <App_Feature id="F1" newID="F1" number={ArabicHTML[0].number} title={ArabicHTML[0].title} content={ArabicHTML[0].content} />
        </Feature_01>
        <Feature_02 id="F2"
                    onMouseOver={this.changeImage} 
                    activeImage={this.state.activeImage}
                    isRTL={this.state.isAppPreviewtStateRTL}>
          <App_Feature id="F2" newID="F2" number={ArabicHTML[1].number} title={ArabicHTML[1].title} content={ArabicHTML[1].content} />
        </Feature_02>
        <Feature_03 id="F3"
                    onMouseOver={this.changeImage} 
                    activeImage={this.state.activeImage}
                    isRTL={this.state.isAppPreviewtStateRTL}>
          <App_Feature id="F3" newID="F3" number={ArabicHTML[2].number} title={ArabicHTML[2].title} content={ArabicHTML[2].content} />
        </Feature_03>
        <MobileImage><AppPreviewImage imageNumber='1' activeImage={this.state.activeImage} src={Image_01}/></MobileImage>
        <MobileImage><AppPreviewImage imageNumber='2' activeImage={this.state.activeImage} src={Image_02}/></MobileImage>
        <MobileImage><AppPreviewImage imageNumber='3' activeImage={this.state.activeImage} src={Image_03}/></MobileImage>
        <MobileImage><AppPreviewImage imageNumber='4' activeImage={this.state.activeImage} src={Image_04}/></MobileImage>
        <MobileImage><AppPreviewImage imageNumber='5' activeImage={this.state.activeImage} src={Image_05}/></MobileImage>
        <MobileImage><AppPreviewImage imageNumber='6' activeImage={this.state.activeImage} src={Image_06}/></MobileImage>
        <Feature_04 id="F4"
                    onMouseOver={this.changeImage} 
                    activeImage={this.state.activeImage}
                    isRTL={this.state.isAppPreviewtStateRTL}>
          <App_Feature id="F4" newID="F4" number={ArabicHTML[3].number} title={ArabicHTML[3].title} content={ArabicHTML[3].content} />
        </Feature_04>
        <Feature_05 id="F5"
                    onMouseOver={this.changeImage} 
                    activeImage={this.state.activeImage}
                    isRTL={this.state.isAppPreviewtStateRTL}>
          <App_Feature id="F5" newID="F5" number={ArabicHTML[4].number} title={ArabicHTML[4].title} content={ArabicHTML[4].content} />
        </Feature_05>
        <Feature_06 id="F6"
                    onMouseOver={this.changeImage} 
                    activeImage={this.state.activeImage}
                    isRTL={this.state.isAppPreviewtStateRTL}>
          <App_Feature id="F6" newID="F6" number={ArabicHTML[5].number} title={ArabicHTML[5].title} content={ArabicHTML[5].content} />
        </Feature_06>
      </Grid>
      )
    }
    else{
      return(
        <Grid>
          <Feature_01 id="F1"
                      onMouseOver={this.changeImage} 
                      activeImage={this.state.activeImage}
                      isRTL={this.state.isAppPreviewtStateRTL}>
            <App_Feature id="F1" newID="F1" number={EnglishHTML[0].number} title={EnglishHTML[0].title} content={EnglishHTML[0].content} />
          </Feature_01>
          <Feature_02 id="F2"
                      onMouseOver={this.changeImage} 
                      activeImage={this.state.activeImage}
                      isRTL={this.state.isAppPreviewtStateRTL}>
            <App_Feature id="F2" newID="F2" number={EnglishHTML[1].number} title={EnglishHTML[1].title} content={EnglishHTML[1].content} />
          </Feature_02>
          <Feature_03 id="F3"
                      onMouseOver={this.changeImage} 
                      activeImage={this.state.activeImage}
                      isRTL={this.state.isAppPreviewtStateRTL}>
            <App_Feature id="F3" newID="F3" number={EnglishHTML[2].number} title={EnglishHTML[2].title} content={EnglishHTML[2].content} />
          </Feature_03>
          <MobileImage><AppPreviewImage imageNumber='1' activeImage={this.state.activeImage} src={Image_01}/></MobileImage>
          <MobileImage><AppPreviewImage imageNumber='2' activeImage={this.state.activeImage} src={Image_02}/></MobileImage>
          <MobileImage><AppPreviewImage imageNumber='3' activeImage={this.state.activeImage} src={Image_03}/></MobileImage>
          <MobileImage><AppPreviewImage imageNumber='4' activeImage={this.state.activeImage} src={Image_04}/></MobileImage>
          <MobileImage><AppPreviewImage imageNumber='5' activeImage={this.state.activeImage} src={Image_05}/></MobileImage>
          <MobileImage><AppPreviewImage imageNumber='6' activeImage={this.state.activeImage} src={Image_06}/></MobileImage>
          <Feature_04 id="F4"
                      onMouseOver={this.changeImage} 
                      activeImage={this.state.activeImage}
                      isRTL={this.state.isAppPreviewtStateRTL}>
            <App_Feature id="F4" newID="F4" number={EnglishHTML[3].number} title={EnglishHTML[3].title} content={EnglishHTML[3].content} />
          </Feature_04>
          <Feature_05 id="F5"
                      onMouseOver={this.changeImage} 
                      activeImage={this.state.activeImage}
                      isRTL={this.state.isAppPreviewtStateRTL}>
            <App_Feature id="F5" newID="F5" number={EnglishHTML[4].number} title={EnglishHTML[4].title} content={EnglishHTML[4].content} />
          </Feature_05>
          <Feature_06 id="F6"
                      onMouseOver={this.changeImage} 
                      activeImage={this.state.activeImage}
                      isRTL={this.state.isAppPreviewtStateRTL}>
            <App_Feature id="F6" newID="F6" number={EnglishHTML[5].number} title={EnglishHTML[5].title} content={EnglishHTML[5].content} />
          </Feature_06>
        </Grid>
      )
    }
  }
}

class App_Feature extends Component {
  render() {
    return (
      <div>
        {/* <AppFeatureNumber   id={this.props.newID}>{ this.props.number  }</AppFeatureNumber> */}
        <AppFeatureTitle    id={this.props.newID}>{ this.props.title   }</AppFeatureTitle>
        <AppFeatureSubTitle id={this.props.newID}>{ this.props.content }</AppFeatureSubTitle>
      </div>
    )
  }
}

/* CSS Styled Components Only Below this comment*/


const Grid = styled.section.attrs({
  id: "app-preview"
})`

  box-sizing:           inherit;
  overflow:             hidden;
  padding-right:        10%;
  padding-left:         10%;
  padding-top:          200px;
  margin-top:           -50px;
  margin-bottom:        100px;
  
  display: grid;
  grid-template-columns:  1fr 1fr 1fr;
  grid-template-rows:     1fr 1fr 1fr;
  grid-template-areas:  "Feature_01 MobileImage Feature_04" 
                        "Feature_02 MobileImage Feature_05" 
                        "Feature_03 MobileImage Feature_06";

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-areas:  "Feature_01" 
                          "Feature_02" 
                          "Feature_03" 
                          "Feature_04" 
                          "Feature_05" 
                          "Feature_06";
  }
`;
const MobileImage = styled.div`
  grid-area:          MobileImage;
  margin-left:        auto;
  margin-right:       auto;
  width:80%;
  height: auto;
  @media screen and (max-width: 500px) {
    display:             none;
  }    
`;

const Feature_01  = styled.div`
  padding-top:        70px;
  text-align:         ${props => props.isRTL? "right" : "left"};
  grid-area:          Feature_01;
  opacity:            0.6;
  transition:         opacity 0.5s ease;
  :hover{
    opacity:            1;
  }
  @media screen and (max-width: 500px) {
    opacity:            1;
  }
`;
const Feature_02 = styled(Feature_01)`
  grid-area:          Feature_02;
`;
const Feature_03 = styled(Feature_01)`
  grid-area:          Feature_03;
`;
const Feature_04 = styled(Feature_01)`
  grid-area:          Feature_04;
`;
const Feature_05 = styled(Feature_01)`
  grid-area:          Feature_05;
`;
const Feature_06 = styled(Feature_01)`
  grid-area:          Feature_06;
`;

const AppPreviewImage = styled.img`
  display:              ${props => props.activeImage === props.imageNumber? "initial" : "none"};
  width:                auto;
  height:               auto;
`;
const AppFeatureNumber = styled(P).attrs({
  id: props => props.newID,
})`
  font-size:            x-large;
  text-transform:       initial;
  font-weight:          bold;
`;
const AppFeatureTitle = styled(P).attrs({
  id: props => props.newID,
})`

  margin-top:           -30px;
  font-size:            x-large;
  text-transform:       initial;
  font-weight:          bold;
`;
const AppFeatureSubTitle = styled.p.attrs({
  id: props => props.newID,
})`
  margin-top:           -26px;
`;