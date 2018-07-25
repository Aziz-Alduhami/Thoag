import styled from "styled-components";
import LogoImage from '../images/nav/logo1.png'

let theme = "rgb(33, 37, 41)";

export const Nav = styled.div`
  /**If the user is scrolling give the nav a color */
  background-color:   ${props => props.isScrolling? theme : "rgba(0,0,0,0)"};
  box-sizing:         border-box;
  padding:            5px 10%;
  /*IF the user is scrolling shrink the van size */
  max-height:         ${props => props.isScrolling? "50px" : "200px"};
  transition:         max-height 0.25s ease-in;
  overflow:           hidden;
  position:           fixed;
  width:              100%;
  top:                0;
  transition:         background-color 0.5s ease;
  
  z-index:            10;
  @media screen and (max-width: 500px) {
    position: fixed;
    float: none;
    display: block;
    text-align: center;
    background-color: black;
    max-height: ${props => props.openNav? "400px" : "50px"};
  }
`;
export const Img = styled.img.attrs({
  src:                LogoImage,
})`
  max-height:         ${props => props.isScrolling? "42px" : "90px"};
  transition:         max-height 0.1s ease-in;
  float:              ${props => props.isRTL ? 'right' : 'left'};

  @media screen and (max-width: 1100px){
    max-height:         ${props => props.isScrolling? "45px" : "60px"};
  }
  @media screen and (max-width: 800px){
    display: none;
  }
`;

export const Right = styled.div`
  box-sizing:         border-box;
  float:              ${props => props.isRTL ? 'left' : 'right'};
  direction:          ${props => props.isRTL ? 'rtl' : 'ltr'};

  @media screen and (max-width: 500px) {
    float: none;
    display: block;
  }
`;

export const A = styled.a`
  float:              ${props => props.isRTL ? 'left' : 'right'};
  box-sizing:         border-box;
  color:              black;
  text-align:         center;
  padding:            10px;
  text-decoration:    none;

  font-size: medium; /** combine */

  background-color: ${props => props.active ? 'rgb(193, 35, 54)' : 'rgba(0,0,0,0)'};
  color: ${props => props.active ?            'rgb(193, 35, 54)' : 'white'};

  &:hover{
    color:            rgb(193, 35, 54);
  }

  @media screen and (max-width: 500px) {
    float: none;
    display: block;
    text-align: ${props => props.isRTL ? 'left' : 'right'};
  }
`;


export const Close = styled.span`
    color:              rgb(170, 170, 170);
    float:              ${props => props.isRTL? "left" : "right"};
    font-size:          xx-large;
    font-weight:        bold;

    display: none;
    
    &:hover,&:focus {
      color:               Red;
      text-decoration:     none;
      cursor:              pointer;
    }
    @media screen and (max-width: 500px) {
      display: initial;
      position: absolute;
      right: 0;
      top: 0;
    }
`;
