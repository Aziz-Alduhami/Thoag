import React, { Component } from 'react'
import styled from "styled-components";


/* Depending on the brower language use one of the two objects */
const ArabicHTML = 
[{question:"ما هي منصة ذوق؟",answer:"ذوق هي منصة تقنية هدفها تسهيل عملية طلب الأطعمة للمناسبات والاجتماعات من أفضل مقدمي الخدمة المتوفرين ؛ وذلك عبر الطلب من تطبيقها (تطبيق منصة ذوق)"},
{question:"ما الفرق بين تطبيق ذوق وبقية التطبيقات المهتمة بالأطعمة؟",answer:"يختص تطبيق ذوق بتنسيق ولائم وخدمات المناسبات والاجتماعات كالبوفيهات والولائم الشعبية، وليس الوجبات العادية والفردية"},
{question:"هل تشمل تغطية ذوق جميع مناطق المملكة؟",answer:"تطبيق ذوق متاح للاستخدام في كل وقت"},
{question:"هل توجد أوقات عمل معينة لذوق؟",answer:"لتسهيل تخطيط واختيار البوفيهات او الولائم، عملنا تطبيقنا بحيث يمكنكم من الدخول على البرنامج في أي وقت واختيار ما تريدون لوقت المناسبة المرغوب. برنامجنا يعمل ليل/نهار."},
{question:"كيف يمكنني استخدام منصة ذوق؟",answer:"يمكنكم الحصول على برنامج ذوق قريباً لأجهزة أبل وللأجهزة التي تعمل بنظام أندرويد في الوقت القريب. يمكنكم استخدام الموقع للاستفسار عن العروض المتاحة، وفريق عمل ذوق سيوفر أحدث تسعيرة مناسبة حسب رغبتكم."},
{question:"كيف تعمل الخدمة؟",answer:"عند الدخول للبرنامج يقوم المستخدم بتحديد مكان وتاريخ المناسبة ومن ثم نقوم بعرض مقدمي الخدمة الذين يمكنهم التوصيل حسب المعطيات من المستخدم. يمكن للعميل استعراض المطاعم، او تصفية النتيجة، او البحث حسب ما يلائمه من أنواع الطعام او مقدمي الخدمات. ومن ثم يختار العميل مقدم الخدمة الذي يريد ويستعرض قائمة الطعام لديه. يقوم العميل بعد ذلك باختيار الطعام الذي يناسبه ويضيفه للسلة وثم يقوم بإضافة أي تعليمات أخرى للمطعم والمحاسبة على طلبه."},
{question:"كيف يمكن للعميل دفع قيمة الطلب؟",answer:"يمكن لعملائنا القيام بدفع قيمة طلباتهم عبر النظام الآمن للدفع الالكتروني ببطاقات الائتمان أو عبر التحويل البنكي لحساب ذوق"},
{question:"هل يمكن الغاء الطلب قبل الدفع؟",answer:"يحق للعملاء إلغاء طلباتهم قبل عملية الدفع، ولا تعتبر العملية كاملة إلا إذا قام العميل بالدفع"},
{question:"ماهي الفترة الممنوعة لإلغاء الطلبات؟",answer:"لكل مطعم وقت محدد يبدأ فيه التجهيز لطلبات العملاء بعد استلام الطلبات. عند بدء هذه الفترة، يكون المطعم قد قام بشراء مكونات ومستلزمات الطلبات والتجهيز والاعداد. قد تكون هذه الفترة صغيرة كثلاث ساعات، او قد تمتد الى أسبوع او أسبوعين. يمكن للعميل التأكد قبل القيام بالدفع عن فترة الإلغاء الممنوعة للمطعم. إذا دخل الطلب وقت الإلغاء الممنوع، فلا يمكن الغاء الطلب او استعادة قيمته. في حاجة تأجيل المناسبة لأي ضرف او لوجود حاجة قاهرة تستدعي الغاء المناسبة كلياً يرجي التواصل مع فريق عمل ذوق لإبلاغ مقدمين الخدمات على ضرورة التجاوب ومد يد العون."},
{question:"كيف اتواصل مع فريق عمل ذوق؟",answer:"فريق عمل ذوق متواجد باستمرار عن طريق خدمة الرد المباشر. لراحتكم خدمة الرد المباشر مفعلة في التطبيقات و الموقع ليسهل التواصل معنا في أي وقت للاستفسار او المساعدة او توصيات مميزة."},
{question:"إذا قام العميل بإلغاء الطلب قبل الفترة الممنوعة، متى يستعيد ماله؟",answer:"نعمل على إرضاء عملاءنا والتأكد من حصولهم على تجربة متميزة مهما كانت. ولذلك نحرص ان تكون فترة الاسترجاع النقدي أقصر ما يمكن. نحن نعمل مع شريكنا المالي لتقليل فترة الاستعادة قدر المستطاع وذلك بالتنسيق مع المنشئات المالية. حاليا، فترة الاسترجاع النقدية تتراوح بين ثلاثة أيام عمل الى أسبوع."},
{question:"",answer:""},
];

const EnglishHTML =
[{question:"What is THOAG platform?",answer:"THOAG is a creative catering platform on smart phone devices. The goal is to simplify finding the best catering menu options for any home or corporate event from the best catering providers in your city."},
{question:"What makes THOAG special?",answer:"The core concept is to focus well known catering services who are known for their top quality. These amazing caterers are rarely found on any food ordering applications. Our motivation is to give you names and services you can trust for their history and long reputation. Moreover, THOAG takes good care to ensure deep verity to cover different aspects of an event needs from cuisine types to special services."},
{question:"Where is THOAG operational?",answer:"Currently, the start is in the Eastern providence of Saudi Arabia. Our plans include expanding throughout Saudi Arabia soon."},
{question:"What is THOAG’s working hour?",answer:"To make your planning for an upcoming event simple we developed simple mobile applications. The applications let you browse all offers and order any time day or night."},
{question:"How can I use THOAG platform?",answer:"You will be able to download the mobile applications soon from Apple store or Google Play store. In addition, you can use the website to place a quotation request to allow THOAG team to provide you with the best recommendations available for the specific time and food preference."},
{question:"How does it work?",answer:"In the mobile applications, once the user selects the time, date and cuisine preferences. The user will be able to filter the result list and look at the details of every catering menu. Then, the selected menu is placed in the shopping cart. Special notes can be placed in the order for the caterer. The final step will be to process the payment in a secure fashion to complete the order."},
{question:"How can a user pay for the order?",answer:"Our valued customers can pay in a secure fashion either through their credit cards or bank transfers."},
{question:"Can a user cancel an order before a bank transfer payment?",answer:"Yes, the user can perform this action. An order will not be considered fully submitted unless the full payment is received. Only fully submitted orders will allow a caterer to review the order for approval."},
{question:"Can a user cancel an order after a bank transfer payment or credit card payment?",answer:"Yes, this action can be done if the order is not yet approved by caterer. In case the caterer approved the order the cancellation is subject to the caterer’s policy."},
{question:"What is the cancellation policy?",answer:"Every caterer has a different cancellation policy for no refund terms. For some caterers the no refund terms can be 3 hours and for others it could be days or weeks in advance. Some caterers start to work actively after confirming the order in preparing for your even and purchase some material and cooking requirements ahead of time. This makes it difficult to obtain a refund after an order is confirmed by the service provider. In case you need to delay the event or cancel due to an emergency you can contact THOAG support team through the live chat channels. THOAG team will contact the caterer to explain the situation and importance of understanding the customers emergency. Still the caterer is the decision maker on providing the refund to the user."},
{question:"How do I contact THOAG support team?",answer:"THOAG support team is always available and close through the live chat. For your comfort we enabled the live chat on our mobile applications and the web site to allow you to get the prompt assistance and reconditions you desire."},
{question:"If a user cancelled the order before the cancellation deadline, when will the money be returned?",answer:"We work hard in to please our customers with a special service on all aspects. For that reason, we strive to keep the return period as brief as possible. This requires coordination with financial and payment gateways. The expected return period could take from 3 to 7 working days."},
];

/* An array component that contains all Qs and As [Arabic/English]*/
// const Q_and_A_list = EnglishHTML.map((element) =>
//   <QandA question={element.question} answer={element.answer} />
// );
// console.log(EnglishHTML);

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
        <FAQContainer id="faq">
          <FAQText>أسئلة شائعة</FAQText>
          <QandA question={ArabicHTML[0].question} answer={ArabicHTML[0].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[1].question} answer={ArabicHTML[1].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[2].question} answer={ArabicHTML[2].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[3].question} answer={ArabicHTML[3].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[4].question} answer={ArabicHTML[4].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[5].question} answer={ArabicHTML[5].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[6].question} answer={ArabicHTML[6].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[7].question} answer={ArabicHTML[7].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[8].question} answer={ArabicHTML[8].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[9].question} answer={ArabicHTML[9].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={ArabicHTML[10].question} answer={ArabicHTML[10].answer} isRTL={this.state.isFaqStateRTL}/>
          {/* <QandA question={ArabicHTML[11].question} answer={ArabicHTML[11].answer} isRTL={this.state.isFaqStateRTL}/> */}
       </FAQContainer>
      )
    }
    else{
      return (
        <FAQContainer id="faq">
          <FAQText>Frequently Asked Questions</FAQText>
          <QandA question={EnglishHTML[0].question} answer={EnglishHTML[0].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[1].question} answer={EnglishHTML[1].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[2].question} answer={EnglishHTML[2].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[3].question} answer={EnglishHTML[3].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[4].question} answer={EnglishHTML[4].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[5].question} answer={EnglishHTML[5].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[6].question} answer={EnglishHTML[6].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[7].question} answer={EnglishHTML[7].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[8].question} answer={EnglishHTML[8].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[9].question} answer={EnglishHTML[9].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[10].question} answer={EnglishHTML[10].answer} isRTL={this.state.isFaqStateRTL}/>
          <QandA question={EnglishHTML[11].question} answer={EnglishHTML[11].answer} isRTL={this.state.isFaqStateRTL}/>
       </FAQContainer>
      )
    }
  }
}



class QandA extends Component{
  constructor(props){
    super(props);
    // this.myRef = React.createRef();
    this.state = {
        active: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleClick(event){
    this.setState({active: !this.state.active});
    // console.log(event.target.nextSibling);
    // this.myRef.current.style.display = this.state.active ? "none":"block";
    // this.forceUpdate();
  }
  handleBlur(event){
    this.setState({active: false});
  }
  render(){
    let newBackgroundColor  = (this.state.active)? "#C12336"  : "white";
    let newMaxHeight        = (this.state.active)? "1%"    : null;
    return(
      <QandAContainer>
        <div              style={{backgroundColor: newBackgroundColor}}>
          <QandAQuestion  onClick={this.handleClick} 
                          onBlur={this.handleBlur}
                          isRTL={this.props.isRTL}
                          >
            {this.props.question}
          </QandAQuestion>
        </div>
        <QandAAnswer      style={{maxHeight: newMaxHeight}}
                          isRTL={this.props.isRTL}>
          {this.props.answer}
        </QandAAnswer>
      </QandAContainer>
    )
  }
}


/* CSS Styled Components Only Below this comment*/
const FAQContainer = styled.section`
  padding-right:  10%;
  padding-left:   10%;
  padding-top:    100px;
  margin-top:     -50px;
`;

const FAQText = styled.h1`
  text-align:     center;
  color:          rgb(54,54,54);
  font-size:      30px;
  font-weight:    700;
  font-family:    'Noto Sans', sans-serif;    
  text-transform: capitalize;
  
  transition:      transform 0.5s, color 0.5s;
  ${'' /* transition-property: transform, color;
  transition-duration: 0.5s, 0.5s;
  transition-timing-function: cubic-bezier(0.2,1,0.3,1); */}
  &:hover{
    color: #C12336;
  }
`;

const QandAContainer = styled.div`
  display:        block;
  box-sizing:     border-box;
`;

/* Accordin */
const QandAQuestion = styled.button`
  background-color: white;
  color:          rgb(54,54,54);
  
  cursor:         pointer;
  padding:        18px;
  width:          100%;
  border:         none;
  text-align:     ${props => props.isRTL ? 'right' : 'left'};
  outline:        none;
  transition:     0.3s;
  border:         1px solid #eeeeee;
  text-transform: uppercase;
  transition:     background 0.5s;
  &:focus{
    background-color: #C12336;
    color: white;
  }
  &:hover{
    background-color: #C12336;
    color: white;
  }
`;
/* Panel */
const QandAAnswer = styled.p`
  ${'' /* padding: 0 18px; */}
  ${'' /* display: none; */}
  text-align:     ${props => props.isRTL ? 'right' : 'left'};
  padding: 2px 5%;
  text-justify: inter-word;
  overflow: hidden;
  max-height: 0;
  transition: max-height 3.5s ease;

  color: rgb(98, 98, 98);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ;
  font-size: 16px;
`;