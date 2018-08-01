import styled from "styled-components";
import {H1,P} from '../styles/GenericComponents'

export const Container = styled.section`
  padding-right:        10%;
  padding-left:         10%;
  margin-top:           -22px;

  width:                100%;
  background-color:     rgb(243, 243, 243);
  @media screen and (max-width: 500px) {
    padding-right:        5%;
    padding-left:         5%;
  }  
`;

export const TextGroup = styled.div`
  padding-top:          5%;
  text-align:           center!important;
  @media screen and (max-width: 500px) {
    padding-top:            10%;
  }
   
`;

export const Text = styled(H1)`
  transition:           color 0.5s;
  &:hover{
    color:                  #C12336;
  }
`;

export const SubText = styled(P)`
  font-size:            large;
`;

export const FormContainer = styled.div`
    margin-left:        20%;
    margin-right:       20%;
    padding-top:        5%;
    padding-bottom:     5%;
    text-align:         center;
    border:             none;
    background-color:   white;
    @media screen and (max-width: 500px) {
      margin-left:        auto;
      margin-right:       auto;
    }
`;