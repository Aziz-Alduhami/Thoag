import styled from "styled-components";
import {H1, P} from './GenericComponents'

export const TextContainer = styled.div`
  text-align: ${props => (props.isRTL ? "right" : "left")};
  position: relative;
  display: inline-block;
  width: 100%;
  left: 0;
`;

export const Text = styled(H1)`
  font-size: xx-large;
  font-weight: 700;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;
export const SubText = styled(P)`
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const EventType = styled.div`
  box-sizing: border-box;
  text-align: ${props => (props.isRTL ? "right" : "left")};
  display: inline-block;
  margin-left: 0.5%;
  margin-right: 0.5%;
  padding: 0 15px 0 5px;
  cursor: auto;
  width: 40%;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  text-align: ${props => (props.isRTL ? "right" : "left")};
  direction: ${props => (props.isRTL ? "rtl" : "ltr")};
`;
export const Checkbox = styled.input`
  text-align: ${props => (props.isRTL ? "right" : "left")};
  direction: ${props => (props.isRTL ? "rtl" : "ltr")};
`;

export const TextArea = styled.textarea`
  height: auto;
  cursor: auto;
  width: 81%;
  margin-bottom: 15px;
  background-color: #f3f3f3;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
