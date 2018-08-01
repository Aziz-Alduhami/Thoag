import styled from "styled-components";
import {H1, P} from '../styles/GenericComponents'
import BgImg from '../images/main/bgImage.jpg'



export const Main = styled.section`
    background:       linear-gradient( rgba(33, 37, 41, 0.65), rgba(33, 37, 41, 0.55) ), url(${BgImg}) no-repeat;
    background-size:  cover;
    direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
    text-align:       center;
    z-index:          -1;
    padding-top:      100px;
    margin-top:       -100px;

    -webkit-box-shadow: 0px 0px 49px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 49px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 49px 1px rgba(0,0,0,0.75);
`;

export const TextContainer = styled.div`
    display:          inline-block;
    left:             0;
    padding-top:      15%;
    position:         relative;
    width:            100%;
    top:              50%;
    @media screen and (max-width: 500px) {
        top:              14vh;
        position:         relative;
        padding-right:    3%;
        padding-left:     3%;
    }
`;

 export const Text = styled(H1)`
    color:          white;
 `;

 export const SubText = styled(P)`
    color:          white;
 `;

export const BtnQuotation = styled.button`
    /*Text */
    color:            white;
    font-size:        large;
    font-weight:      600;
    /*Bg and Border */
    background-color: rgb(193, 35, 54);
    border:           none;
    border-radius:    3px;
    /* Size */
    margin-bottom:    100px;
    width:            260px;
    height:           50px;
    /* Effects */
    text-transform:   uppercase;
    transition:       background-color 0.5s ease;
    
    &:hover{
      background-color: #db0620;
    }
    @media screen and (max-width: 500px) {
        top:              14vh;
        position:         relative;
        width:            80%;
    }
`;

export const ButtonsGroup = styled.div`
    padding:          1.5%;
    text-align:       ${props => props.isRTL? "left" : "right"};
    @media screen and (max-width: 500px) {
      text-align:         center;
      
    }
`;


export const ModalContainer = styled.div`
    text-align:         center;
    display:            none; 
    position:           fixed; 
    z-index:            10;
    padding-top:        100px;
    padding-left:       10%;
    padding-right:      10%;
    border:             none;

    left:               0;
    top:                0;
    width:              100%; 
    height:             100%;

    overflow:           auto; 
    background-color:   rgb(0,0,0);
    background-color:   rgba(0,0,0,0.4); 
    transition:         background-color 0.5s ease;
    display:            ${props => props.isModalOpen? "block" : "none"};
    @media screen and (max-width: 500px) {
      padding-left:       5%;
      padding-right:      5%;
    }
`;

export const MContent = styled.div`
    background-color:   #fefefe;
    margin:             auto;
    padding:            20px;
    border:             none;
    border-radius:      3px;
    width:              80%;
    @media screen and (max-width: 500px) {
      width:              100%;
      padding:            0;
    }
`;

export const Close = styled.span`
    color:              rgb(170, 170, 170);
    float:              ${props => props.isRTL? "left" : "right"};
    font-size:          xx-large;
    font-weight:        bold;

    &:hover,&:focus {
      color:               black;
      text-decoration:     none;
      cursor:              pointer;
    }
    @media screen and (max-width: 500px) {
      font-size:           xx-large;
      padding-right:       2vw;
      padding-left:        2vw;
    }
`;