import React, { Component } from "react";
// import request from 'superagent';
import axios from 'axios'
/**Components */
import {Input, Select, Submit } from "../styles/GenericComponents";
import {TextContainer, Text, SubText, EventType, Label, Checkbox, TextArea} from '../styles/1-modal-Styled'

const ArabicHTML_Modal = {
  title: "دعونا نعمل معا",
  subtitle:
    "أخبرنا عن مناسبتك ، كيف يمكننا مساعدتك في الحصول على أفضل عرض للولائم؟",
  information:
    "تزويدنا بمعلوماتك يتيح لنا أن نعرض لك الأسعار وأن نجيب على استفساراتك بشكل أفضل",
  firstName: "الاسم الاول *",
  lastName: "اسم العائلة *",
  email: "البريد الإلكتروني *",
  mobile: "رقم الهاتف المحمول *",
  timing: "الوقت والتاريخ *",
  budget: "الميزانية (SAR)",
  guests: "عدد الحضور",
  details:
    "يرجى مشاركة أي تفاصيل إضافية حول طلبك. هذا مفيد جدًا للسماح لنا بتقديم التوصيات الأكثر ملاءمة."
};
const EnglisHTML_Modal = {
  title: "Let's Work Together",
  subtitle:
    "Tell us about you event, how can we help you get the best catering offer?",
  information:
    "Providing us with your information allows us to provide you with the quotation effectively. It also allows our team to clarify any point on your added details if needed. We look forward to exceed your expectation",
  firstName: "First Name *",
  lastName: "Last Name *",
  email: "Email",
  mobile: "Mobile number",
  timing: "Date and time",
  budget: "Budget(SAR)",
  guests: "Number of guests",
  menu: EnglishHTNL_MenuReq,
  special: EnglishHTML_SpecialReq,
  how: EnglishHTML_HowDidYou,
  location: EnglishHTML_Location,
  type: EnglishHTML_EventType,
  details:
    "Please share any additional details about your request. This is very  useful to allow us to provide the most suitable recommendations."
};
const ArabicHTML_MenuReq = [
  "متطلبات التقديم",
  "قائمة إفطار",
  "قائمة ساندويش",
  "قائمة طعام شعبي",
  "قائمة طعام عالمي",
  "قائمة طعام إيطالي",
  "قائمة طعام بحري",
  "ذبائح",
  "صواني شوكولا او تمور",
  "شاي و قهوة",
  "شواء في موقع المناسبة"
];
const EnglishHTNL_MenuReq = [
  "Menu requirements",
  "Breakfast",
  "Sandwitches",
  "Traditional",
  "International",
  "Italian",
  "Seafood",
  "Kharouf",
  "Finger food",
  "Chocolate platters",
  "Dates platters",
  "Tea and coffee with waiters",
  "BBQ live cooking station"
];

const ArabicHTML_SpecialReq = [
  "خدمات خاصة",
  "خدمة النادل (رجال)",
  "خدمة النادل (نساء)",
  "تجهيزات طاولات و كراسي",
  "تجهيزات جلسات خارجية"
];
const EnglishHTML_SpecialReq = [
  "Special services",
  "Tables and chairs setup",
  "Waiter services",
  "Outdoor setup"
];

const ArabicHTML_HowDidYou = [
  "كيف تعرفت على خدمة ذوق؟",
  "وسائل التواصل الاجتماعي",
  "عن طريق الاصدقاء",
  "زرت الموقع سابقاً",
  "جربت الخدمة من قبل"
];
const EnglishHTML_HowDidYou = [
  "How did you hear of us",
  "Social media",
  "Word of mouth",
  "Tried THOAG before"
];

const ArabicHTML_Location = ["موقعك *", "الدمام", "الظهران", "الخبر"];
const EnglishHTML_Location = ["Location *", "Dammam", "Dhahran", "Khobar"];

const ArabicHTML_EventType = [
  "حدد نوع مناسبتك",
  "مناسبة خارجية (مكان مفتوح)",
  " مناسبة داخلية (مكان مغلق)"
];
const EnglishHTML_EventType = [
  "Select your preferred event type",
  "Outdoor Event",
  "Indoor Event"
];


export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    let data = this.state;

    if(!this.validateForm(data)){
      return;
    }
    console.log(data);
    const formUrl = 'http://ec2-13-59-12-113.us-east-2.compute.amazonaws.com/thoag/api/v1/thoag-form'

    

    // axios.post(formUrl, {data})
    // .then(function (response) {
    //   console.log(response);
    //   return response
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    
    // //axios
    // axios({
    //   method: 'post', //you can set what request you want to be
    //   url: formUrl,
    //   data: data,
    //   headers: {
    //     crossdomain: true,
    //     accept: 'json',
    //   }
    // }).then(function (response) {
    //   console.log(response);
    //   return response
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    //SUPER AGENT
    // request
    // .post('http://ec2-13-59-12-113.us-east-2.compute.amazonaws.com/thoag/api/v1/thoag-form')
    // .send(data) // sends a JSON post body
    // .set('Access-Control-Allow-Origin', '*')
    // .set('accept', 'json')
    // .end((err, res) => {
    //   console.log(err);
    //   console.log(res);
    // });


    // var request = new XMLHttpRequest();
    // request.open('POST', 'http://ec2-13-59-12-113.us-east-2.compute.amazonaws.com/thoag/api/v1/thoag-form“', true);
    // request.setRequestHeader('Access-Control-Allow-Origin', '*');
    // // /request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // request.send(data);
    // console.log("RESPONSE");
    // console.log(request.response);
    // console.log(request.responseText);
    // console.log(request.responseURL);
    // console.log(request.status);

    fetch(formUrl, {
      method: 'POST',
      body: data,
    }).then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  validateForm(data){
    if(typeof data.first_name == undefined || data.first_name == ""){alert("Please enter a valid first name"); return false;};
    if(typeof data.last_name == undefined || data.last_name == ""){alert("Please enter a valid last name"); return false;};
    if(typeof data.email == undefined || data.email == ""){alert("Please enter a valid email"); return false;};
    if(typeof data.mobile_number == undefined || data.mobile_number == ""){alert("Please enter a valid mobile number"); return false;};
    if(typeof data.date_time == undefined || data.date_time == ""){alert("Please enter a valid date and time"); return false;};
    if(typeof data.budget == undefined || data.budget == ""){alert("Please enter a budget"); return false;};
    if(typeof data.number_of_guests == undefined || data.number_of_guests == ""){alert("Please enter the guests count"); return false;};
    if(typeof data.menu_requirements == undefined || data.menu_requirements == ""){alert("Please select a menu"); return false;};
    if(typeof data.special_services == undefined || data.special_services == ""){alert("Please select a service"); return false;};
    if(typeof data.hear_by == undefined || data.hear_by == ""){alert("Please select a how_did_you_hear"); return false;};
    if(typeof data.location == undefined || data.location == ""){alert("Please select a location"); return false;}; 
    
    // for (property in data){
    //   if(typeof data.property == undefined){
    //     return false;
    //   }
    // }
    console.log('Validation passed !');
    return true;
  }
  render() {
    let ModalHTML       = (this.props.isRTL)? ArabicHTML_Modal      : EnglisHTML_Modal;
    let ModalMenuReq    = (this.props.isRTL)? ArabicHTML_MenuReq    : EnglishHTNL_MenuReq;
    let ModalSpecialReq = (this.props.isRTL)? ArabicHTML_SpecialReq : EnglishHTML_SpecialReq;
    let ModalHowDidYou  = (this.props.isRTL)? ArabicHTML_HowDidYou  : EnglishHTML_HowDidYou;
    let ModalLocation   = (this.props.isRTL)? ArabicHTML_Location   : EnglishHTML_Location;
    let ModalEventType  = (this.props.isRTL)? ArabicHTML_EventType  : EnglishHTML_EventType;
      return (
        <div>
          <TextContainer isRTL={this.props.isRTL}>
            <Text>{ModalHTML.title}</Text>
            <SubText>{ModalHTML.subtitle}</SubText>
          </TextContainer>
          <form
            name="Quotation-form"
            data-netlify="true"
            onSubmit={this.handleSubmit}
            method="POST"
          >
            <input type="hidden" name="form-name" value="Quotation-form" />
            <Input
              name="First Name"
              type="text"
              isRTL={this.props.isRTL}
              placeholder={ModalHTML.firstName}
              required
              onChange={e => this.setState({ first_name: e.target.value })}
            />
            <Input
              name="Last Name"
              type="text"
              isRTL={this.props.isRTL}
              placeholder={ModalHTML.lastName}
              required
              onChange={e => this.setState({ last_name: e.target.value })}
            />
            <Input
              name="Email"
              type="email"
              isRTL={this.props.isRTL}
              placeholder={ModalHTML.email}
              required
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Input
              name="Mobile"
              type="number"
              isRTL={this.props.isRTL}
              placeholder={ModalHTML.mobile}
              required
              onChange={e => this.setState({ mobile_number: e.target.value })}
            />
            <Input
              name="Date-Time"
              type="datetime-local"
              isRTL={this.props.isRTL}
              placeholder={ModalHTML.timing}
              required
              onChange={e => this.setState({ date_time: e.target.value })}
            />
            <Input
              name="Budget"
              type="number"
              min="0"
              isRTL={this.props.isRTL}
              placeholder={ModalHTML.budget}
              required
              onChange={e => this.setState({ budget: e.target.value })}
            />
            <Input
              name="NumberOfGuests"
              type="number"
              min="0"
              isRTL={this.props.isRTL}
              placeholder={ModalHTML.guests}
              required
              onChange={e => this.setState({ number_of_guests: e.target.value })}
            />
            <Select
              name="Menu"
              required
              onChange={e => this.setState({ menu_requirements: e.target.value })}
            >
              {ModalMenuReq.map((element, index) => (
                <option key={index} value={index === 0 ? "" : element}>
                  {element}
                </option>
              ))}
            </Select>
            <Select
              name="SpecialServices"
              required
              onChange={e => this.setState({ special_services: e.target.value })}
            >
              {ModalSpecialReq.map((element, index) => (
                <option key={index} value={index === 0 ? "" : element}>
                  {element}
                </option>
              ))}
            </Select>
            <Select
              name="HowDidYouHear"
              required
              onChange={e => this.setState({ hear_by: e.target.value })}
            >
              {ModalHowDidYou.map((element, index) => (
                <option key={index} value={index === 0 ? "" : element}>
                  {element}
                </option>
              ))}
            </Select>
            <Select
              name="Location"
              required
              onChange={e => this.setState({ location: e.target.value })}
            >
              {ModalLocation.map((element, index) => (
                <option key={index} value={index === 0 ? "" : element}>
                  {element}
                </option>
              ))}
            </Select>
            <EventType isRTL={this.props.isRTL}>
              <Label>{ModalEventType[0]}</Label>
              <br />
              <Label>
                <Checkbox
                  name="OutsideEvent"
                  type="checkbox"
                  isRTL={this.props.isRTL}
                  onChange={e => this.setState({ outsideEvent: e.target.checked })}
                />
                {ModalEventType[1]}
              </Label>{" "}
              <br />
              <Label>
                <Checkbox
                  name="IndoorEvent"
                  type="checkbox"
                  isRTL={this.props.isRTL}
                  onChange={e => this.setState({ indoorEvent: e.target.checked })}
                />
                {ModalEventType[2]}
              </Label>
            </EventType>
            <TextArea
              name="Details"
              rows="3"
              placeholder={ModalHTML.details}
              onChange={e => this.setState({ note: e.target.value })}
            />
            <Submit type="submit" value={this.props.isRTL? "أطلب" : "Request"} />
          </form>
        </div>
      );
  }
}

