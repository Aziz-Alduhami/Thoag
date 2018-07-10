import React, { Component } from 'react'
import styled from "styled-components";
import iphoneImg from '../images/app preview/iphoneimg.png'



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
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isAppPreviewtStateRTL: nextProps.isRTL });
  }
  render() {
    if(this.state.isAppPreviewtStateRTL){
      return(
        <Grid>
          <Feature_01><App_Feature number={ArabicHTML[0].number} title={ArabicHTML[0].title} content={ArabicHTML[0].content} /></Feature_01>
          <Feature_02><App_Feature number={ArabicHTML[1].number} title={ArabicHTML[1].title} content={ArabicHTML[1].content} /></Feature_02>
          <Feature_03><App_Feature number={ArabicHTML[2].number} title={ArabicHTML[2].title} content={ArabicHTML[2].content} /></Feature_03>
          <MobileImage><AppPreviewImage src={iphoneImg}/></MobileImage>
          <Feature_04><App_Feature number={ArabicHTML[3].number} title={ArabicHTML[3].title} content={ArabicHTML[3].content} /></Feature_04>
          <Feature_05><App_Feature number={ArabicHTML[4].number} title={ArabicHTML[4].title} content={ArabicHTML[4].content} /></Feature_05>
          <Feature_06><App_Feature number={ArabicHTML[5].number} title={ArabicHTML[5].title} content={ArabicHTML[5].content} /></Feature_06>
        </Grid>
      )
    }
    else{
      return(
        <Grid>
          <Feature_01><App_Feature number={EnglishHTML[0].number} title={EnglishHTML[0].title} content={EnglishHTML[0].content} /></Feature_01>
          <Feature_02><App_Feature number={EnglishHTML[1].number} title={EnglishHTML[1].title} content={EnglishHTML[1].content} /></Feature_02>
          <Feature_03><App_Feature number={EnglishHTML[2].number} title={EnglishHTML[2].title} content={EnglishHTML[2].content} /></Feature_03>
          <MobileImage><AppPreviewImage src={iphoneImg}/></MobileImage>
          <Feature_04><App_Feature number={EnglishHTML[3].number} title={EnglishHTML[3].title} content={EnglishHTML[3].content} /></Feature_04>
          <Feature_05><App_Feature number={EnglishHTML[4].number} title={EnglishHTML[4].title} content={EnglishHTML[4].content} /></Feature_05>
          <Feature_06><App_Feature number={EnglishHTML[5].number} title={EnglishHTML[5].title} content={EnglishHTML[5].content} /></Feature_06>
        </Grid>
      )
    }
  }
}

class App_Feature extends Component {
  render() {
    return (
      <div>
        <AppFeatureNumber   >{ this.props.number  }</AppFeatureNumber>
        <AppFeatureTitle    >{ this.props.title   }</AppFeatureTitle>
        <AppFeatureSubTitle >{ this.props.content }</AppFeatureSubTitle>
      </div>
    )
  }
}

/* CSS Styled Components Only Below this comment*/
const AppPreviewImage = styled.img`
width: auto;
height: auto;
      position: fixed;
    top: 12%;
    left: 2%;
`;
const AppFeatureNumber = styled.h3`
  font-size: 40px;
`;
const AppFeatureTitle = styled.h3`
margin-top: -30px;
`;
const AppFeatureSubTitle = styled.p`
  margin-top: -26px;
`;

const Grid = styled.section.attrs({
  id: "app-preview"
})`

  overflow:       hidden;
  padding-right:  10%;
  padding-left:   10%;
  padding-top:    100px;
  margin-top:     -50px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:  "Feature_01 MobileImage Feature_04" 
                        "Feature_02 MobileImage Feature_05" 
                        "Feature_03 MobileImage Feature_06";

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:  "MobileImage Feature_01" 
                          "MobileImage Feature_02" 
                          "MobileImage Feature_03" 
                          "MobileImage Feature_04" 
                          "MobileImage Feature_05" 
                          "MobileImage Feature_06";
  }
`;
const MobileImage = styled.div`
  grid-area: MobileImage;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Feature_01  = styled.div`
  grid-area: Feature_01;
  
`;
const Feature_02 = styled.div`
  grid-area: Feature_02;
`;
const Feature_03 = styled.div`
  grid-area: Feature_03;
`;
const Feature_04 = styled.div`
  grid-area: Feature_04;
`;
const Feature_05 = styled.div`
  grid-area: Feature_05;
`;
const Feature_06 = styled.div`
  grid-area: Feature_06;
`;