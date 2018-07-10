import React, { Component } from 'react'
import styled from "styled-components";


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
        <JoinUsContainer id="join-us">
          <JoinUsTextContainer>
            <JoinUsText>{ArabicHTML.text}</JoinUsText>
            <JoinUsSubText>{ArabicHTML.subtext}</JoinUsSubText>
          </JoinUsTextContainer>
  
          <JoinUsFormContainer isRTL={this.state.isJoinUsStateRTL}>
            <form onSubmit={this.handleSubmit}>
                <Input placeholder={ArabicHTML.business_name} type="text" isRTL={this.state.isJoinUsStateRTL}/>
                <Input placeholder={ArabicHTML.email} type="text" isRTL={this.state.isJoinUsStateRTL}/>
                <Input placeholder={ArabicHTML.mobile} type="text" pattern="" isRTL={this.state.isJoinUsStateRTL}/>
                <Input placeholder={ArabicHTML.location} type="text" isRTL={this.state.isJoinUsStateRTL}/>
                <Submit type="submit" value="أرسل" />
            </form>
          </JoinUsFormContainer>
        </JoinUsContainer>
      )
    }
    else{
      return (
        <JoinUsContainer id="join-us">
          <JoinUsTextContainer>
            <JoinUsText>{EnglishHTML.text}</JoinUsText>
            <JoinUsSubText>{EnglishHTML.subtext}</JoinUsSubText>
          </JoinUsTextContainer>
  
          <JoinUsFormContainer isRTL={this.state.isJoinUsStateRTL}>
            <form onSubmit={this.handleSubmit}>
                <Input placeholder={EnglishHTML.business_name}    type="text"   isRTL={this.state.isJoinUsStateRTL}/>
                <Input placeholder={EnglishHTML.email}            type="text"   isRTL={this.state.isJoinUsStateRTL}/>
                <Input placeholder={EnglishHTML.mobile}           type="text"   pattern="/05\d{8}/" isRTL={this.state.isJoinUsStateRTL} />
                <Input placeholder={EnglishHTML.location}         type="text"   isRTL={this.state.isJoinUsStateRTL}/>
                <Submit type="submit" value="Submit" />
            </form>
          </JoinUsFormContainer>
        </JoinUsContainer>
      )
    }
  }
}


/* CSS Styled Components Only Below this comment*/
const JoinUsContainer = styled.section`
  padding-right:  10%;
  padding-left:   10%;
  padding-top:    100px;
  margin-top:     -50px;
  width: 100%;
  background-color: #f3f3f3;
`;
const JoinUsTextContainer = styled.div`
  text-align: center!important;

`;
const JoinUsText = styled.h2`
  margin-bottom: 10px !important;
  max-width: 667px;
    float: none;
    margin: 0 auto;
    margin-bottom: 40px;
    position: relative;
`;
const JoinUsSubText = styled.p`
padding-top: 40px;
  color: rgb(98, 98, 98);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ;
  font-size: 16px;
`;

const JoinUsFormContainer = styled.div`
  padding-top: 3%;
  padding-bottom: 1.5%;
  text-align: center!important;
  background-color: white;
  border: none;
  border-radius: 15px;
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 100px;
`;

const Input = styled.input`
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  margin-bottom: 5px;
  padding: 5px 15px 15px 5px;
  background-color: #f3f3f3;
  cursor: auto;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  width: 80%;
  
`;
const Submit = styled.input`
  padding: 5px 15px 15px 5px;
  color: #fff;
  background: #C12336;
  cursor: auto;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  width: 50%;
  height: 50%;
`;
