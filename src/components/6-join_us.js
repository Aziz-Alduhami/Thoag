import React, { Component } from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

/**Components */
import {Input, Submit} from '../styles/GenericComponents'
import {Container, TextGroup, Text, SubText, FormContainer} from '../styles/6-join_us-Styled'

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
class JoinUs extends Component {
  //State: none
  //Props: isRTL from Index
  constructor(props){
    super(props);
  }
  handleSubmit(event){
    //
  }
  render() {
    let JoinUsHTML = (this.props.isRTL)? ArabicHTML : EnglishHTML;
      return (
        <Container id="join-us">
          <TextGroup>
            <Text>{JoinUsHTML.text}</Text>
            <SubText>{JoinUsHTML.subtext}</SubText>
          </TextGroup>
          <FormContainer isRTL={this.props.isRTL}>
            <form onSubmit={this.handleSubmit} style={{marginBottom: "-24px"}} method="POST" >
                <input type="hidden" name="form-name" value="joinUs" />  
                <Input placeholder={JoinUsHTML.business_name}     type="text" isRTL={this.props.isRTL}/>
                <Input placeholder={JoinUsHTML.email}             type="text" isRTL={this.props.isRTL}/>
                <Input placeholder={JoinUsHTML.mobile}            type="text" isRTL={this.props.isRTL}/>
                <Input placeholder={JoinUsHTML.location}          type="text" isRTL={this.props.isRTL}/>
                <Submit type="submit" value={this.props.isRTL? "أرسل" : "Submit"} />
            </form>
          </FormContainer>
          <FormContainer style={{backgroundColor: "rgb(243, 243, 243)"}}></FormContainer>
        </Container>
      )
    }
}



const mapStateToProps = (state) => ({
	isRTL: state.isRTL,
});

export default connect(mapStateToProps)(JoinUs);