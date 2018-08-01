import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  MobileImage,
  Feature_01,
  Feature_02,
  Feature_03,
  Feature_04,
  Feature_05,
  Feature_06,
  AppPreviewImage,
  AppFeatureNumber,
  AppFeatureTitle,
  AppFeatureSubTitle
} from "../styles/3-app_preview-Styled";
/**Images */
import Image_01 from "../images/app preview/1.png";
import Image_02 from "../images/app preview/2.png";
import Image_03 from "../images/app preview/3.png";
import Image_04 from "../images/app preview/4.png";
import Image_05 from "../images/app preview/5.png";
import Image_06 from "../images/app preview/6.png";

/* Depending on the brower language choose one of the two objects */
const ImageArray = [Image_01, Image_02, Image_03, Image_04, Image_05, Image_06];

const ArabicHTML = [
  {
    number: "01",
    title: "احصل على أفضل الخيارات",
    content: "نحن نهتم بايجاد صفوة مميزة من التقديمات المختفلة"
  },
  {
    number: "02",
    title: "تمتع بخدمة مريحة ذات سرعة عالية",
    content: "نحن نضمن تأكيد طلبك من قبل مقمي الخدمة بفعالية"
  },
  {
    number: "03",
    title: "شاركنا رأيك",
    content: "من خلال التقييم لكل تجربة مع ذوق"
  },
  {
    number: "04",
    title: "تتبع التحديثات",
    content: "الحصول على التنبيهات فورا تلقائيا"
  },
  {
    number: "05",
    title: "ادفع بأمان و سلاسة",
    content: "لراحتكم فعلنا طرق دفع آمنة"
  },
  {
    number: "06",
    title: "احصل على الدعم المباشر",
    content: "نحن على الدوم جاهزون لمساعدتكم من كل مكان في التطبيقات و الموقع"
  }
];

const EnglishHTML = [
  {
    number: "01",
    title: "Get the best catering options",
    content: "We deeply care to deliver quality caterers that match your needs"
  },
  {
    number: "02",
    title: "High convenience and speed",
    content: "We ensure your order is confirmed by caterer effectively"
  },
  {
    number: "03",
    title: "We value your opinion",
    content: "Always rate your catering experience"
  },
  {
    number: "04",
    title: "Live tracking",
    content: "Always notified when order status is updated"
  },
  {
    number: "05",
    title: "Only secure payment methods",
    content: "we enabled secure money transfer channels for your ease of mind"
  },
  {
    number: "06",
    title: "Live support",
    content: "We are always ready to serve you in the apps and on our website"
  }
];

/* App Preview component */
class AppPreview extends Component {
  //State: activeImage displays the current hovered image
  //Props: isRTL from Index
  constructor(props) {
    super(props);
    this.state = {
      activeImage: "1"
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(event) {
    let imageId = event.target.id.charAt(1);
    this.setState({ activeImage: imageId });
  }

  render() {
    let AppPrevHTML = this.props.isRTL ? ArabicHTML : EnglishHTML;
    return (
      <Grid>
        <Feature_01
          id="F1"
          onMouseOver={this.changeImage}
          {...this.state}
          {...this.props}
        >
          <App_Feature
            id="F1"
            newID="F1"
            number={AppPrevHTML[0].number}
            title={AppPrevHTML[0].title}
            content={AppPrevHTML[0].content}
          />
        </Feature_01>
        <Feature_02
          id="F2"
          onMouseOver={this.changeImage}
          {...this.state}
          {...this.props}
        >
          <App_Feature
            id="F2"
            newID="F2"
            number={AppPrevHTML[1].number}
            title={AppPrevHTML[1].title}
            content={AppPrevHTML[1].content}
          />
        </Feature_02>
        <Feature_03
          id="F3"
          onMouseOver={this.changeImage}
          {...this.state}
          {...this.props}
        >
          <App_Feature
            id="F3"
            newID="F3"
            number={AppPrevHTML[2].number}
            title={AppPrevHTML[2].title}
            content={AppPrevHTML[2].content}
          />
        </Feature_03>
        {ImageArray.map((image, index) => (
          <MobileImage key={index}>
            <AppPreviewImage
              imageNumber={(index + 1).toString()}
              src={image}
              {...this.state}
            />
          </MobileImage>
        ))}
        <Feature_04
          id="F4"
          onMouseOver={this.changeImage}
          {...this.state}
          {...this.props}
        >
          <App_Feature
            id="F4"
            newID="F4"
            number={AppPrevHTML[3].number}
            title={AppPrevHTML[3].title}
            content={AppPrevHTML[3].content}
          />
        </Feature_04>
        <Feature_05
          id="F5"
          onMouseOver={this.changeImage}
          {...this.state}
          {...this.props}
        >
          <App_Feature
            id="F5"
            newID="F5"
            number={AppPrevHTML[4].number}
            title={AppPrevHTML[4].title}
            content={AppPrevHTML[4].content}
          />
        </Feature_05>
        <Feature_06
          id="F6"
          onMouseOver={this.changeImage}
          {...this.state}
          {...this.props}
        >
          <App_Feature
            id="F6"
            newID="F6"
            number={AppPrevHTML[5].number}
            title={AppPrevHTML[5].title}
            content={AppPrevHTML[5].content}
          />
        </Feature_06>
      </Grid>
    );
  }
}

class App_Feature extends Component {
  render() {
    return (
      <div>
        {/* <AppFeatureNumber   id={this.props.newID}>{ this.props.number  }</AppFeatureNumber> */}
        <AppFeatureTitle id={this.props.newID}>
          {this.props.title}
        </AppFeatureTitle>
        <AppFeatureSubTitle id={this.props.newID}>
          {this.props.content}
        </AppFeatureSubTitle>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isRTL: state.isRTL
});

export default connect(mapStateToProps)(AppPreview);
