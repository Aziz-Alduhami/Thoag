import React, { Component } from 'react'
import styled from "styled-components"
import {connect} from 'react-redux';

/**Components */
import {H1, P} from '../styles/GenericComponents'


const SliderArray = ["http://www.alandalushall.com/img/logo.png",
"https://pbs.twimg.com/profile_images/825625916386766849/bD_zFCDj_400x400.jpg",
"http://www.deeraty.com/new/wp-content/uploads/2014/04/Screen-Shot-2015-09-16-at-8.46.24-PM.png",
"https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/Sheraton_Hotels.svg/200px-Sheraton_Hotels.svg.png",
"http://www.sanbok.com/images/logo.png"];

class Partners extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr: SliderArray,
      show: '',
    }
  }
  render() {
    return (
      <Container id="join-us">
        <TextGroup>
          <Text>Our Partners</Text>
          <SubText>small text</SubText>
        </TextGroup>
        {SliderArray.map((element,index) => <Part key={index} index={index} style={{gridArea: "P2"}} source={element}/>)}
      </Container>
    )
  }
}

class Part extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: this.props.index === 0? true: false,
    }
  }
  render() {
    return (
      <PartnersContainer>
        <Arrow style={{gridArea: "P1"}} onclick="plusSlides(-1)">&#10094;</Arrow>
        <img src={this.props.source} style={{display: this.state.active? "block":"none"}}/>
        <Arrow style={{gridArea: "P3"}} onclick="plusSlides(1)">&#10095;</Arrow>
      </PartnersContainer>
    )
  }
}


const Partner = styled(Part)`
  padding: 1%;
  margin: 3%;
  box-sizing: border-box;
  display: inline-block;
  background: white;
  -webkit-box-shadow: 5px 5px 0px 0px #000000; 
  box-shadow: 3px 3px 10px 1px #b0b1b0;
  text-align:           center!important;
`;


const Arrow = styled.a`
  cursor: pointer;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: rgb(193,35,54);
  font-weight: bold;
  font-size: 28px;
  transition: 0.6s ease;
  border-radius: 0 18px 3px 0;
  text-align: center;
`;

const PartnersContainer = styled.div`
  box-sizing:           inherit;
  overflow:             hidden;
  padding-right:        10%;
  padding-left:         10%;

  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "P1 P2 P3";

`;




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

/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ededed+98 */
background: rgb(255,255,255); /* Old browsers */
background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(243,243,243,1) 98%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(243,243,243,1) 98%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(243,243,243,1) 98%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed',GradientType=0 ); /* IE6-9 */


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
const mapStateToProps = (state) => ({
	isRTL: state.isRTL,
});

export default connect(mapStateToProps)(Partners);

