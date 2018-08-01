import styled from "styled-components";
import {P} from '../styles/GenericComponents'


export const Grid = styled.section.attrs({
  id: "app-preview"
})`

  box-sizing:           inherit;
  overflow:             hidden;
  padding-right:        10%;
  padding-left:         10%;
  padding-top:          200px;
  margin-top:           -50px;
  margin-bottom:        100px;
  
  display: grid;
  grid-template-columns:  1fr 1fr 1fr;
  grid-template-rows:     1fr 1fr 1fr;
  grid-template-areas:  "Feature_01 MobileImage Feature_04" 
                        "Feature_02 MobileImage Feature_05" 
                        "Feature_03 MobileImage Feature_06";

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-areas:  "Feature_01" 
                          "Feature_02" 
                          "Feature_03" 
                          "Feature_04" 
                          "Feature_05" 
                          "Feature_06";
  }
`;
export const MobileImage = styled.div`
  grid-area:          MobileImage;
  margin-left:        auto;
  margin-right:       auto;
  width:80%;
  height: auto;
  @media screen and (max-width: 500px) {
    display:             none;
  }    
`;

export const Feature_01  = styled.div`
  padding-top:        70px;
  text-align:         ${props => props.isRTL? "right" : "left"};
  grid-area:          Feature_01;
  opacity:            0.6;
  transition:         opacity 0.5s ease;
  :hover{
    opacity:            1;
  }
  @media screen and (max-width: 500px) {
    opacity:            1;
  }
`;
export const Feature_02 = styled(Feature_01)`
  grid-area:          Feature_02;
`;
export const Feature_03 = styled(Feature_01)`
  grid-area:          Feature_03;
`;
export const Feature_04 = styled(Feature_01)`
  grid-area:          Feature_04;
`;
export const Feature_05 = styled(Feature_01)`
  grid-area:          Feature_05;
`;
export const Feature_06 = styled(Feature_01)`
  grid-area:          Feature_06;
`;

export const AppPreviewImage = styled.img`
  display:              ${props => props.activeImage === props.imageNumber? "initial" : "none"};
  width:                auto;
  height:               auto;
`;
export const AppFeatureNumber = styled(P).attrs({
  id: props => props.newID,
})`
  font-size:            x-large;
  text-transform:       initial;
  font-weight:          bold;
`;
export const AppFeatureTitle = styled(P).attrs({
  id: props => props.newID,
})`

  margin-top:           -30px;
  font-size:            x-large;
  text-transform:       initial;
  font-weight:          bold;
`;
export const AppFeatureSubTitle = styled.p.attrs({
  id: props => props.newID,
})`
  margin-top:           -26px;
`;