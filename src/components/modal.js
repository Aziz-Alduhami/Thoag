import React, { Component } from 'react'
import styled from "styled-components";


const ArabicHTML_Modal = { tile: "دعونا نعمل معا",
                  subtitle: "أخبرنا عن مناسبتك ، كيف يمكننا مساعدتك في الحصول على أفضل عرض للولائم؟",
                  information: "تزويدنا بمعلوماتك يتيح لنا أن نعرض لك الأسعار وأن نجيب على استفساراتك بشكل أفضل",
                  firstName: "الاسم الاول *", lastName: "اسم العائلة *", email: "البريد الإلكتروني *", mobile: "رقم الهاتف المحمول *", timing: "الوقت والتاريخ *",
                  budget: "الميزانية (SAR)", guests: "عدد الحضور", details: "يرجى مشاركة أي تفاصيل إضافية حول طلبك. هذا مفيد جدًا للسماح لنا بتقديم التوصيات الأكثر ملاءمة."
                  };
const EnglisHTML_Modal = { tile: "Let's Work Together",
                  subtitle: "Tell us about you event, how can we help you get the best catering offer?",
                  information: "Providing us with your information allows us to provide you with the quotation effectively. It also allows our team to clarify any point on your added details if needed. We look forward to exceed your expectation",
                  firstName: "First Name *", lastName: "Last Name *", email: "Email", mobile: "Mobile number", timing: "Date and time",
                  budget: "Budget(SAR)", guests: "Number of guests", menu: EnglishHTNL_MenuReq, special: English_HTML_SpecialReq, how: EnglishHTML_HowDidYou,
                  location: EnglishHTML_Location, type: EnglishHTML_EventType, details: "Please share any additional details about your request. This is very  useful to allow us to provide the most suitable recommendations."
                };
const ArabicHTML_MenuReq =["متطلبات التقديم",
                  "قائمة إفطار",
                  "قائمة ساندويش",
                  "قائمة طعام شعبي",
                  "قائمة طعام عالمي",
                  "قائمة طعام إيطالي",
                  "قائمة طعام بحري",
                  "ذبائح",
                  "صواني شوكولا او تمور",
                  "شاي و قهوة",
                  "شواء في موقع المناسبة"];
const EnglishHTNL_MenuReq = ["Menu requirements",
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
                  "BBQ live cooking station"];

const ArabicHTML_SpecialReq = ["خدمات خاصة","خدمة النادل (رجال","خدمة النادل (نساء","تجهيزات طاولات و كراسي","تجهيزات جلسات خارجية"];
const English_HTML_SpecialReq = ["Special services","Tables and chairs setup","Waiter services","Outdoor setup"];

const ArabicHTML_HowDidYou = ["كيف تعرفت على خدمة ذوق؟","وسائل التواصل الاجتماعي","عن طريق الاصدقاء","زرت الموقع سابقاً","جربت الخدمة من قبل"];
const EnglishHTML_HowDidYou = ["How did you hear of us","Social media","Word of mouth","Tried THOAG before"];

const ArabicHTML_Location = ["موقعك *","الدمام","الظهران","الخبر"];
const EnglishHTML_Location = ["Location *","Dammam","Dhahran","Khobar"];

const ArabicHTML_EventType =["حدد نوع مناسبتك","مناسبة خارجية (مكان مفتوح)"," مناسبة داخلية (مكان مغلق)"];
const EnglishHTML_EventType = ["Select your preferred event type", "Outdoor Event","Indoor Event"];


export default class Modal extends Component {
    constructor(props){
      super(props);
    }
    // handleSubmit(event){}
    render() {
      if(this.props.isRTL){
        return (
            <div>
                <TextContainer isRTL={this.props.isRTL}>
                    <Text>{ArabicHTML_Modal.tile}</Text>
                    <SubText>{ArabicHTML_Modal.subtitle}</SubText>
                </TextContainer>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={ArabicHTML_Modal.firstName}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={ArabicHTML_Modal.lastName}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={ArabicHTML_Modal.email}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={ArabicHTML_Modal.mobile}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={ArabicHTML_Modal.timing}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={ArabicHTML_Modal.budget}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={ArabicHTML_Modal.guests}/>
                    <Select name="menu">
                    {ArabicHTML_MenuReq.map((index) => <option key={index} value={index}>{index}</option>)}
                    </Select>
                    <Select name="speial-req">
                    {ArabicHTML_SpecialReq.map((index) => <option key={index} value={index}>{index}</option>)}
                    </Select>
                    <Select name="how">
                    {ArabicHTML_HowDidYou.map((index) => <option key={index} value={index}>{index}</option>)}
                    </Select>
                    <Select name="location">
                    {ArabicHTML_Location.map((index) => <option key={index} value={index}>{index}</option>)}
                    </Select>
                    <br/>

                    <Label isRTL={this.props.isRTL}>{ArabicHTML_EventType[0]}</Label>
                    <input type="checkbox" isRTL={this.props.isRTL} value={ArabicHTML_EventType[1]}/>{ArabicHTML_EventType[1]}<br/>
                    <input type="checkbox" isRTL={this.props.isRTL} value={ArabicHTML_EventType[2]}/>{ArabicHTML_EventType[2]}<br/>
                    <Input placeholder={ArabicHTML_Modal.details}/>
                    <Submit type="submit" value="اطلب" />
                </form>
            </div>
        )
      }
      else{
        return (
            <div>
                <TextContainer isRTL={this.props.isRTL}>
                    <Text>{EnglisHTML_Modal.tile}</Text>
                    <SubText>{EnglisHTML_Modal.subtitle}</SubText>
                </TextContainer>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={EnglisHTML_Modal.firstName}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={EnglisHTML_Modal.lastName}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={EnglisHTML_Modal.email}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={EnglisHTML_Modal.mobile}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={EnglisHTML_Modal.timing}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={EnglisHTML_Modal.budget}/>
                    <Input type="text" isRTL={this.props.isRTL} placeholder={EnglisHTML_Modal.guests}/>
        
                    <Select name="menu">
                    {EnglishHTNL_MenuReq.map((index) => <option key={index} value={index}>{index}</option>)}
                    </Select>
                    <Select name="speial-req">
                    {English_HTML_SpecialReq.map((index) => <option key={index} value={index}>{index}</option>)}
                    </Select>
                    <Select name="how">
                    {EnglishHTML_HowDidYou.map((index) => <option key={index} value={index}>{index}</option>)}
                    </Select>
                    <Select name="location">
                    {EnglishHTML_Location.map((index) => <option key={index} value={index}>{index}</option>)}
                    </Select>

										<Event isRTL={this.props.isRTL}>
											<Label>{EnglishHTML_EventType[0]}</Label><br />
											<Label><Checkbox type="checkbox" isRTL={this.props.isRTL}/> {EnglishHTML_EventType[1]} </Label>	<br />								
											<Label><Checkbox type="checkbox" isRTL={this.props.isRTL}/> {EnglishHTML_EventType[2]} </Label>
										</Event>           	

                    <TextArea rows="3" placeholder={EnglisHTML_Modal.details}/>

                    <Submit type="submit" value="Request" />
                </form>
            </div>
        )
      }
    }
  }



const TextContainer = styled.div`
    text-align:     ${props => props.isRTL ? 'right' : 'left'};
    position:       relative;
    display:        inline-block;    
    width:          100%;
    left:           0;
`;

const Text = styled.h2`
  color:          rgb(54, 54, 54);
  font-size:      30px;
  font-weight:    700;
  box-sizing:     border-box;
`;
const SubText = styled.p`
  color:          rgb(98, 98, 98);
  font-size:      20px;
  font-weight:    400;
  box-sizing:     border-box;
  font-family:    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ;
`;




  /* Modal CSS */

const Input = styled.input`
box-sizing:     border-box;
${'' /* text-align: ${props => props.isRTL ? 'right' : 'left'}; */}
margin-bottom: 15px;
padding: 5px 15px 15px 5px;
margin: 0.5%;
background-color: #f3f3f3;
cursor: auto;
border: 1px solid #e6e6e6;
border-radius: 3px;
width: 40%;
`;


const Select = styled.select`
display: inline-block;
margin-bottom: 15px;
padding: 5px 15px 15px 5px;
margin: 0.5%;
background-color: #f3f3f3;
cursor: auto;
border: 1px solid #e6e6e6;
border-radius: 3px;
width: 40%;
`;


const Event = styled.div`
box-sizing:     border-box;
text-align:     ${props => props.isRTL ? 'right' : 'left'};
display: inline-block;
		margin-left: 0.5%;
		margin-right: 0.5%;
		padding: 0 15px 0 5px;
		cursor: auto;
		width: 40%;
`;

const Label = styled.label`
		
    text-align: ${props => props.isRTL ? 'right' : 'left'};
    direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
    
`;
const Checkbox = styled.input`
    text-align: ${props => props.isRTL ? 'right' : 'left'};
    direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
`;

const TextArea = styled.textarea`
	height: auto;
		cursor: auto;
		width: 81%;
margin-bottom: 15px;
background-color: #f3f3f3;
border: 1px solid #e6e6e6;
border-radius: 3px;
`;

const Submit = styled.input`
	padding: 5px 15px 15px 5px;
	color: #fff;
	background: #C12336;
	cursor: auto;
	border: 1px solid #e6e6e6;
	border-radius: 3px;
	width: 81.5%;
`;
