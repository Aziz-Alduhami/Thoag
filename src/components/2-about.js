import React, { Component } from 'react'
import styled from "styled-components";

import {H1, P} from '../styles/Mystyles'

import f_image0 from '../images/01.jpg'
import f_image1 from '../images/02.jpg'
import f_image2 from '../images/03.jpg'
import f_image3 from '../images/04.jpg'



/* Depending on the brower language choose one of the two objects */
const ArabicHTML = {
title:"كيف نخدمك؟", 
content:".نحن نسعى لتقديم أفضل تجربة لعملائنا عبر تقديم أفضل خيارات أطعمة الحفلات والمناسبات، والتي تساهم في تكوين ذكرى لا تنسى للمناسبة",
};

const EnglishHTML = {
title:"How Do We Serve You?", 
content:"We truly care about our users and their occasions. We are dedicated to providing you with the best catering options to ensure your event is memorable.",
};

const ArabicHTML_Features =[
{ //4
  title:"دعم جمعية إطعام",
  content: "نساهم في جهود حفظ النعمة لجمعية إطعام",
  img: f_image3,
},
{ //3
  title:"دفع آمن",
  content: "نضمن 'طريقة دفع آمنة و سلسة",
  img: f_image2,
},
{ //2
  title:"تلبية الاحتياجات",
  content: "نقدم لكم خيارات متنوعة لأفضل مقدمي الأطعمة",
  img: f_image1,
},
{
  title:"ضمان الجودة",
  content: "نقدم لكم خيارات متنوعة لأفضل مقدمي الأطعمة",
  img: f_image0,
}
];

const EnglishHTML_Features =[{
  //1
  title:"We List Quality",
  content: "We list various top catering services on our mobile application",
  img: f_image0,
},
{ //2
  title:"Fulfill Your Needs",
  content: "You can pick different services for your event",
  img: f_image1,
},
{ //3
  title:"Secure Payment",
  content: "We ensure secure payment methods and on time service",
  img: f_image2,
},
{ //4
  title:"Saudi Foodbank",
  content: "We always encourage supporting Saudi Foodbank food preservation efforts",
  img: f_image3,
  }
];



/* About component */
export default class About extends Component {
  /* props: isRTL  */
  constructor(props){
    super(props);
    this.state = {
      isAboutStateRTL: this.props.isRTL,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isAboutStateRTL: nextProps.isRTL });
  }
  render() {
    return (           
      <Container id="about">

        <TextContainer isRTL={this.state.isAboutStateRTL}>
          <Text    >{this.state.isAboutStateRTL? ArabicHTML.title : EnglishHTML.title}</Text>
          <SubText >{this.state.isAboutStateRTL? ArabicHTML.content : EnglishHTML.content}</SubText>
        </TextContainer>

        <ServicesContainer>
          <Service title    ={this.state.isAboutStateRTL? ArabicHTML_Features[0].title : EnglishHTML_Features[0].title} 
                    content ={this.state.isAboutStateRTL? ArabicHTML_Features[0].content : EnglishHTML_Features[0].content}  
                    img     ={this.state.isAboutStateRTL? ArabicHTML_Features[0].img : EnglishHTML_Features[0].img}  
                    isRTL={this.state.isAboutStateRTL}/>

          <Service title    ={this.state.isAboutStateRTL? ArabicHTML_Features[1].title : EnglishHTML_Features[1].title} 
                    content ={this.state.isAboutStateRTL? ArabicHTML_Features[1].content : EnglishHTML_Features[1].content}  
                    img     ={this.state.isAboutStateRTL? ArabicHTML_Features[1].img : EnglishHTML_Features[1].img}  
                    isRTL={this.state.isAboutStateRTL}/>

          <Service title    ={this.state.isAboutStateRTL? ArabicHTML_Features[2].title : EnglishHTML_Features[2].title} 
                    content ={this.state.isAboutStateRTL? ArabicHTML_Features[2].content : EnglishHTML_Features[2].content}  
                    img     ={this.state.isAboutStateRTL? ArabicHTML_Features[2].img : EnglishHTML_Features[2].img}  
                    isRTL={this.state.isAboutStateRTL}/>

          <Service title    ={this.state.isAboutStateRTL? ArabicHTML_Features[3].title : EnglishHTML_Features[3].title} 
                    content ={this.state.isAboutStateRTL? ArabicHTML_Features[3].content : EnglishHTML_Features[3].content}  
                    img     ={this.state.isAboutStateRTL? ArabicHTML_Features[3].img : EnglishHTML_Features[3].img}  
                    isRTL={this.state.isAboutStateRTL}/>         
        </ServicesContainer>

      </Container>
    )
  }
}


// 
class Service extends Component {
  render(){
    return (
      <ServicesContainerContainer>
        <AboutServiceImage        src={this.props.img} />
        <AboutServiceTextContainer isRTL={this.props.isRTL}>
          <AboutServiceText       >{this.props.title}</AboutServiceText>
          <ServicesContainerubText    >{this.props.content}</ServicesContainerubText>
        </AboutServiceTextContainer>
      </ServicesContainerContainer>
    )
  }
}


/* CSS Styled Components Only Below this comment*/
const Container = styled.section`
  margin-top:             -50px;
  padding:                100px 10% 0 10%; 
  overflow:               hidden;
`;

const TextContainer = styled.div`
  text-align:             ${props => props.isRTL ? 'right' : 'left'};
  position:               relative;
  display:                inline-block;    
  width:                  100%;
  left:                   0;
`;

const Text = styled(H1)`
  text-transform: initial;
`;
const SubText = styled(P)`
`;

const ServicesContainer = styled.div`
  display:                grid;
  grid-template-columns:  25% 25% 25% 25% 10%;
  grid-template-rows:     auto auto;

  @media screen and (max-width: 500px) {
    display:                  inline-block;
  }
`;
const ServicesContainerContainer =styled.div`
  padding: 5%;
  overflow: hidden;
`;
const AboutServiceImage = styled.img`
  width: auto;
  height: auto;
  transition-duration: 0.2s;
  overflow: hidden;
  &:hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        }
`;

const AboutServiceTextContainer = styled.div`
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  padding-left: 60px;
  
`;

const AboutServiceText = styled.h5`
  font-size: 20px;
  font-family: 'Noto Sans', sans-serif;    
  color: rgb(54, 54, 54);
  text-transform: capitalize;
  font-weight: bold;
`;

const ServicesContainerubText = styled.p`
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ;
  color: rgb(98, 98, 98);

`;
