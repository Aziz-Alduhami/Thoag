import React, { Component } from 'react'
import styled from "styled-components";
/**Components */
import {H1, P, Input, Submit} from '../styles/Mystyles'

/* Depending on the brower language use one of the two objects */
const ArabicHTML = {text:"انضمام مقدمي الخدمات",
subtext: "الرجاء تقديم الطلب بكال المعلومات و فريق عمل منصة ذوق سيقوم بالاتصال بكم",
business_name:"اسم المنشأة",
email:"البريد الالكتروني",
mobile: "رقم الجوال",
location: "الموقع (المدينة)",
submit: "ارسل الاستفسار"
};

const EnglishHTML = {text:"Join Us As Catering",
subtext: "Provide us with the following information and our team will be in touch.",
business_name:"Business Name",
email:"Email",
mobile: "Mobile number",
location: "Your Location",
submit: "Submit"
};


/* JoinUs component */
export default class JoinUs extends Component {
  /* props: isRTL  */
  constructor(props){
    super(props);
    this.state = {
      isJoinUsStateRTL: this.props.isRTL,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isJoinUsStateRTL: nextProps.isRTL });
  }
  handleSubmit(event){
    //
  }
  render() {
    if(this.state.isJoinUsStateRTL){
      return (
        <Container id="join-us">
          <TextGroup>
            <Text>{ArabicHTML.text}</Text>
            <SubText>{ArabicHTML.subtext}</SubText>
          </TextGroup>
  
          <FormContainer isRTL={this.state.isJoinUsStateRTL}>
            <form onSubmit={this.handleSubmit} style={{marginBottom: "-24px"}} method="POST" netlify="true" >
                <input type="hidden" name="form-name" value="joinUs" />  
                <Input placeholder={ArabicHTML.business_name} type="text" isRTL={this.state.isJoinUsStateRTL}/>
                <Input placeholder={ArabicHTML.email} type="text" isRTL={this.state.isJoinUsStateRTL}/>
                <Input placeholder={ArabicHTML.mobile} type="text" pattern="" isRTL={this.state.isJoinUsStateRTL}/>
                <Input placeholder={ArabicHTML.location} type="text" isRTL={this.state.isJoinUsStateRTL}/>
                <Submit type="submit" value="أرسل" />
            </form>
          </FormContainer>
          <FormContainer style={{backgroundColor: "rgb(243, 243, 243)"}}></FormContainer>
        </Container>
      )
    }
    else{
      return (
        <Container id="join-us">
          <TextGroup>
            <Text>{EnglishHTML.text}</Text>
            <SubText>{EnglishHTML.subtext}</SubText>
          </TextGroup>
  
          <FormContainer isRTL={this.state.isJoinUsStateRTL}>
            <form onSubmit={this.handleSubmit} style={{marginBottom: "-24px"}}  method="POST" netlify="true">
                <input type="hidden" name="form-name" value="joinUs" />  
                <Input placeholder={EnglishHTML.business_name}    type="text"   isRTL={this.state.isJoinUsStateRTL} name="name"/>
                <Input placeholder={EnglishHTML.email}            type="text"   isRTL={this.state.isJoinUsStateRTL} name="ema"/>
                <Input placeholder={EnglishHTML.mobile}           type="text"   isRTL={this.state.isJoinUsStateRTL} name="mob" />
                <Input placeholder={EnglishHTML.location}         type="text"   isRTL={this.state.isJoinUsStateRTL} name="loc"/>
                <Submit type="submit" value="Submit" />
            </form>
          </FormContainer>
          <FormContainer style={{backgroundColor: "rgb(243, 243, 243)"}}></FormContainer>
        </Container>
      )
    }
  }
}


/* CSS Styled Components Only Below this comment*/
const Container = styled.section`
  padding-right:        10%;
  padding-left:         10%;
  margin-top:           -50px;

  width:                100%;
  background-color:     rgb(243, 243, 243);
  @media screen and (max-width: 500px) {
    padding-right:        5%;
    padding-left:         5%;
  }  
`;

const TextGroup = styled.div`
  padding-top:          5%;
  text-align:           center!important;
  @media screen and (max-width: 500px) {
    padding-top:            10%;
  }
   
`;

const Text = styled(H1)`
  transition:           color 0.5s;
  &:hover{
    color:                  #C12336;
  }
`;

const SubText = styled(P)`
  font-size:            large;
`;

const FormContainer = styled.div`
    margin-left:        20%;
    margin-right:       20%;
    padding-top:        5%;
    padding-bottom:     5%;
    text-align:         center;
    border:             none;
    background-color:   white;
    @media screen and (max-width: 500px) {
      margin-left:        auto;
      margin-right:       auto;
    }
`;


