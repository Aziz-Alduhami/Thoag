import styled from "styled-components";
import {H1,P} from '../styles/GenericComponents'


export const Container = styled.section`
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

export const Text = styled(H1)`
  text-align:           center;
  transition:           color 0.5s;
  &:hover{
    color:                  #C12336;
  }
`;

export const Box = styled.div`
  display:              block;
  box-sizing:           border-box;
`;

export const Q_Container = styled.div`
  background-color:     ${props => props.active? "#C12336"  : "white"}
`;

export const Question = styled.button`
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

export const Answer = styled(P).attrs({
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