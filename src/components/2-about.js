import React, { Component } from "react";
import { connect } from "react-redux";
/**Components */
import {
  ServeStyled,
  Container,
  TextContainer,
  Text,
  SubText,
  ServicesContainer,
  ServiceImg,
  GrpSerText,
  ServiceText,
  ServiceSubText
} from "../styles/2-about-Styled";
/**Images */
import f_image0 from "../images/about/01.jpg";
import f_image1 from "../images/about/02.jpg";
import f_image2 from "../images/about/03.jpg";
import f_image3 from "../images/about/04.jpg";

/* Depending on the brower language choose one of the two objects */
const ArabicHTML = {
  title: "كيف نخدمك؟",
  content:
    ".نحن نسعى لتقديم أفضل تجربة لعملائنا عبر تقديم أفضل خيارات أطعمة الحفلات والمناسبات، والتي تساهم في تكوين ذكرى لا تنسى للمناسبة"
};

const EnglishHTML = {
  title: "How Do We Serve You?",
  content:
    "We truly care about our users and their occasions. We are dedicated to providing you with the best catering options to ensure your event is memorable."
};

const ArabicHTML_Features = [
  {
    //4
    title: "دعم جمعية إطعام",
    content: "نساهم في جهود حفظ النعمة لجمعية إطعام",
    img: f_image3
  },
  {
    //3
    title: "دفع آمن",
    content: "نضمن 'طريقة دفع آمنة و سلسة",
    img: f_image2
  },
  {
    //2
    title: "تلبية الاحتياجات",
    content: "نقدم لكم خيارات متنوعة لأفضل مقدمي الأطعمة",
    img: f_image1
  },
  {
    title: "ضمان الجودة",
    content: "نقدم لكم خيارات متنوعة لأفضل مقدمي الأطعمة",
    img: f_image0
  }
];

const EnglishHTML_Features = [
  {
    //1
    title: "We List Quality",
    content: "We list various top catering services on our mobile application",
    img: f_image0
  },
  {
    //2
    title: "Fulfill Your Needs",
    content: "You can pick different services for your event",
    img: f_image1
  },
  {
    //3
    title: "Secure Payment",
    content: "We ensure secure payment methods and on time service",
    img: f_image2
  },
  {
    //4
    title: "Saudi Foodbank",
    content:
      "We always encourage supporting Saudi Foodbank food preservation efforts",
    img: f_image3
  }
];

/* About component */
class About extends Component {
  render() {
    return (
      <Container id="about">
        <TextContainer {...this.props}>
          <Text>{this.props.isRTL ? ArabicHTML.title : EnglishHTML.title}</Text>
          <SubText>
            {this.props.isRTL ? ArabicHTML.content : EnglishHTML.content}
          </SubText>
        </TextContainer>
        <ServicesContainer>
          {this.props.isRTL
            ? ArabicHTML_Features.map((element, index) => (
                <Service
                  key={index}
                  title={element.title}
                  content={element.content}
                  img={element.img}
                  {...this.props}
                />
              ))
            : EnglishHTML_Features.map((element, index) => (
                <Service
                  key={index}
                  title={element.title}
                  content={element.content}
                  img={element.img}
                  {...this.props}
                />
              ))}
        </ServicesContainer>
      </Container>
    );
  }
}

class Service extends Component {
  render() {
    return (
      <ServeStyled>
        <div style={{ overflow: "hidden" }}>
          <ServiceImg src={this.props.img} />
        </div>
        <GrpSerText {...this.props}>
          <ServiceText>{this.props.title}</ServiceText>
          <ServiceSubText>{this.props.content}</ServiceSubText>
        </GrpSerText>
      </ServeStyled>
    );
  }
}

const mapStateToProps = state => ({
  isRTL: state.isRTL
});

export default connect(mapStateToProps)(About);
