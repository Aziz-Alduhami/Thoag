import React, { Component } from 'react'
import styled from "styled-components";

import {H1, P} from '../styles/Mystyles'

/* Depending on the brower language use one of the two objects */
const ArabicHTML = 
[{id: 1,question:"ما هي منصة ذوق؟",answer:"ذوق هي منصة تقنية هدفها تسهيل عملية طلب الأطعمة للمناسبات والاجتماعات من أفضل مقدمي الخدمة المتوفرين ؛ وذلك عبر الطلب من تطبيقها (تطبيق منصة ذوق)"},
{id: 2,question:"ما الفرق بين تطبيق ذوق وبقية التطبيقات المهتمة بالأطعمة؟",answer:"يختص تطبيق ذوق بتنسيق ولائم وخدمات المناسبات والاجتماعات كالبوفيهات والولائم الشعبية، وليس الوجبات العادية والفردية"},
{id: 3,question:"هل تشمل تغطية ذوق جميع مناطق المملكة؟",answer:"تطبيق ذوق متاح للاستخدام في كل وقت"},
{id: 4,question:"هل توجد أوقات عمل معينة لذوق؟",answer:"لتسهيل تخطيط واختيار البوفيهات او الولائم، عملنا تطبيقنا بحيث يمكنكم من الدخول على البرنامج في أي وقت واختيار ما تريدون لوقت المناسبة المرغوب. برنامجنا يعمل ليل/نهار."},
{id: 5,question:"كيف يمكنني استخدام منصة ذوق؟",answer:"يمكنكم الحصول على برنامج ذوق قريباً لأجهزة أبل وللأجهزة التي تعمل بنظام أندرويد في الوقت القريب. يمكنكم استخدام الموقع للاستفسار عن العروض المتاحة، وفريق عمل ذوق سيوفر أحدث تسعيرة مناسبة حسب رغبتكم."},
{id: 6,question:"كيف تعمل الخدمة؟",answer:"عند الدخول للبرنامج يقوم المستخدم بتحديد مكان وتاريخ المناسبة ومن ثم نقوم بعرض مقدمي الخدمة الذين يمكنهم التوصيل حسب المعطيات من المستخدم. يمكن للعميل استعراض المطاعم، او تصفية النتيجة، او البحث حسب ما يلائمه من أنواع الطعام او مقدمي الخدمات. ومن ثم يختار العميل مقدم الخدمة الذي يريد ويستعرض قائمة الطعام لديه. يقوم العميل بعد ذلك باختيار الطعام الذي يناسبه ويضيفه للسلة وثم يقوم بإضافة أي تعليمات أخرى للمطعم والمحاسبة على طلبه."},
{id: 7,question:"كيف يمكن للعميل دفع قيمة الطلب؟",answer:"يمكن لعملائنا القيام بدفع قيمة طلباتهم عبر النظام الآمن للدفع الالكتروني ببطاقات الائتمان أو عبر التحويل البنكي لحساب ذوق"},
{id: 8,question:"هل يمكن الغاء الطلب قبل الدفع؟",answer:"يحق للعملاء إلغاء طلباتهم قبل عملية الدفع، ولا تعتبر العملية كاملة إلا إذا قام العميل بالدفع"},
{id: 9,question:"ماهي الفترة الممنوعة لإلغاء الطلبات؟",answer:"لكل مطعم وقت محدد يبدأ فيه التجهيز لطلبات العملاء بعد استلام الطلبات. عند بدء هذه الفترة، يكون المطعم قد قام بشراء مكونات ومستلزمات الطلبات والتجهيز والاعداد. قد تكون هذه الفترة صغيرة كثلاث ساعات، او قد تمتد الى أسبوع او أسبوعين. يمكن للعميل التأكد قبل القيام بالدفع عن فترة الإلغاء الممنوعة للمطعم. إذا دخل الطلب وقت الإلغاء الممنوع، فلا يمكن الغاء الطلب او استعادة قيمته. في حاجة تأجيل المناسبة لأي ضرف او لوجود حاجة قاهرة تستدعي الغاء المناسبة كلياً يرجي التواصل مع فريق عمل ذوق لإبلاغ مقدمين الخدمات على ضرورة التجاوب ومد يد العون."},
{id: 10,question:"كيف اتواصل مع فريق عمل ذوق؟",answer:"فريق عمل ذوق متواجد باستمرار عن طريق خدمة الرد المباشر. لراحتكم خدمة الرد المباشر مفعلة في التطبيقات و الموقع ليسهل التواصل معنا في أي وقت للاستفسار او المساعدة او توصيات مميزة."},
{id: 11,question:"إذا قام العميل بإلغاء الطلب قبل الفترة الممنوعة، متى يستعيد ماله؟",answer:"نعمل على إرضاء عملاءنا والتأكد من حصولهم على تجربة متميزة مهما كانت. ولذلك نحرص ان تكون فترة الاسترجاع النقدي أقصر ما يمكن. نحن نعمل مع شريكنا المالي لتقليل فترة الاستعادة قدر المستطاع وذلك بالتنسيق مع المنشئات المالية. حاليا، فترة الاسترجاع النقدية تتراوح بين ثلاثة أيام عمل الى أسبوع."},
];

const EnglishHTML =
[{id: 1,question:"What is THOAG platform?",answer:"THOAG is a creative catering platform on smart phone devices. The goal is to simplify finding the best catering menu options for any home or corporate event from the best catering providers in your city."},
{id: 2,question:"What makes THOAG special?",answer:"The core concept is to focus well known catering services who are known for their top quality. These amazing caterers are rarely found on any food ordering applications. Our motivation is to give you names and services you can trust for their history and long reputation. Moreover, THOAG takes good care to ensure deep verity to cover different aspects of an event needs from cuisine types to special services."},
{id: 3,question:"Where is THOAG operational?",answer:"Currently, the start is in the Eastern providence of Saudi Arabia. Our plans include expanding throughout Saudi Arabia soon."},
{id: 4,question:"What is THOAG’s working hour?",answer:"To make your planning for an upcoming event simple we developed simple mobile applications. The applications let you browse all offers and order any time day or night."},
{id: 5,question:"How can I use THOAG platform?",answer:"You will be able to download the mobile applications soon from Apple store or Google Play store. In addition, you can use the website to place a quotation request to allow THOAG team to provide you with the best recommendations available for the specific time and food preference."},
{id: 6,question:"How does it work?",answer:"In the mobile applications, once the user selects the time, date and cuisine preferences. The user will be able to filter the result list and look at the details of every catering menu. Then, the selected menu is placed in the shopping cart. Special notes can be placed in the order for the caterer. The final step will be to process the payment in a secure fashion to complete the order."},
{id: 7,question:"How can a user pay for the order?",answer:"Our valued customers can pay in a secure fashion either through their credit cards or bank transfers."},
{id: 8,question:"Can a user cancel an order before a bank transfer payment?",answer:"Yes, the user can perform this action. An order will not be considered fully submitted unless the full payment is received. Only fully submitted orders will allow a caterer to review the order for approval."},
{id: 9,question:"Can a user cancel an order after a bank transfer payment or credit card payment?",answer:"Yes, this action can be done if the order is not yet approved by caterer. In case the caterer approved the order the cancellation is subject to the caterer’s policy."},
{id: 10,question:"What is the cancellation policy?",answer:"Every caterer has a different cancellation policy for no refund terms. For some caterers the no refund terms can be 3 hours and for others it could be days or weeks in advance. Some caterers start to work actively after confirming the order in preparing for your even and purchase some material and cooking requirements ahead of time. This makes it difficult to obtain a refund after an order is confirmed by the service provider. In case you need to delay the event or cancel due to an emergency you can contact THOAG support team through the live chat channels. THOAG team will contact the caterer to explain the situation and importance of understanding the customers emergency. Still the caterer is the decision maker on providing the refund to the user."},
{id: 11,question:"How do I contact THOAG support team?",answer:"THOAG support team is always available and close through the live chat. For your comfort we enabled the live chat on our mobile applications and the web site to allow you to get the prompt assistance and reconditions you desire."},
{id: 12,question:"If a user cancelled the order before the cancellation deadline, when will the money be returned?",answer:"We work hard in to please our customers with a special service on all aspects. For that reason, we strive to keep the return period as brief as possible. This requires coordination with financial and payment gateways. The expected return period could take from 3 to 7 working days."},
];


/* FAQ component */
export default class FAQ extends Component {
  /* props: isRTL  */
  constructor(props){
    super(props);
    this.state = {
      isFaqStateRTL: this.props.isRTL,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ isFaqStateRTL: nextProps.isRTL });
  }
  render() {
    if(this.state.isFaqStateRTL){
      return (
        <Container id="faq">
          <Text>أسئلة شائعة</Text>
          {ArabicHTML.map( (index) => <QandA key={index.id} question={index.question} answer={index.answer} isRTL={this.state.isFaqStateRTL}></QandA> )}
       </Container>
      )
    }
    else{
      return (
        <Container id="faq">
          <Text>Frequently Asked Questions</Text>
          {EnglishHTML.map( (index) => <QandA key={index.id} question={index.question} answer={index.answer} isRTL={this.state.isFaqStateRTL}></QandA> )}
       </Container>
      )
    }
  }
}



class QandA extends Component{
  constructor(props){
    super(props);
    this.state = {
        active: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleClick(event){
    this.setState({active: !this.state.active});
  }
  handleBlur(event){
    this.setState({active: false});
  }
  render(){
    // let newBackgroundColor  = (this.state.active)? "#C12336"  : "white";
    
    return(
      <Box>
        <Q_Container onMouseDown ={this.handleClick} onBlur ={this.handleBlur}>
          <Question  isRTL={this.props.isRTL}>
            {this.props.question}
          </Question>
        </Q_Container>

        <Answer active={this.state.active} isRTL={this.props.isRTL}>{this.props.answer}</Answer>
      </Box>
    )
  }
}


/* CSS Styled Components Only Below this comment*/
const Container = styled.section`
  padding-right:        10%;
  padding-left:         10%;
  padding-top:          100px;
  margin-bottom:        100px;
  margin-top:           -50px;
  @media screen and (max-width: 500px) {
    padding-right:        5%;
    padding-left:         5%;
  }  
`;

const Text = styled(H1)`
  text-align:           center;
  transition:           color 0.5s;
  &:hover{
    color:                  #C12336;
  }
`;

const Box = styled.div`
  display:              block;
  box-sizing:           border-box;
`;

const Q_Container = styled.div`
  background-color:     ${props => props.active? "#C12336"  : "white"}
`;

const Question = styled.button`
  text-align:           ${props => props.isRTL ? 'right' : 'left'};
  color:                rgb(54,54,54);
  background-color:     white;
  padding:              18px;
  width:                100%;
  outline:              none;
  transition:           0.3s;
  border:               1px solid #eeeeee;
  text-transform:       uppercase;
  cursor:               pointer;
  transition:           background 0.5s;
  &:focus{
    background-color:       #C12336;
    color: white;
  }
  &:hover{
    background-color:       #e2384d;
    color: white;
  }
`;

const Answer = styled(P).attrs({
  dir: props => props.isRTL ? 'rtl' : 'ltr'
})`
  max-height:           ${props => props.active? "100%": "0"};
  text-align:           ${props => props.isRTL ? 'right' : 'left'};
  padding:              2px 5%;
  text-justify:         auto;
  overflow:             hidden;
  font-size:            large;
  @media screen and (max-width: 500px) {
    text-align:             center;
  }  
`;