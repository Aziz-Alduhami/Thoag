import styled from "styled-components";
import {H1, P} from '../styles/GenericComponents'


export const ServeStyled = styled.div`
  margin: 1.5px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(rgb(68, 68, 68), white);
`;

/* CSS Styled Components Only Below this comment*/
export const Container = styled.section`
  margin-top:             -50px;
  padding:                100px 10% 0 10%; 
  overflow:               hidden;
  
`;

export const TextContainer = styled.div`
  text-align:             ${props => props.isRTL ? 'right' : 'left'};
  position:               relative;
  display:                inline-block;    
  width:                  100%;
  left:                   0;

  
`;

export const Text = styled(H1)`
  text-transform:         initial;
`;
export const SubText = styled(P)`
`;

export const ServicesContainer = styled.div`
  display:                grid;
  grid-template-columns:  25% 25% 25% 25%;
  grid-template-rows:     auto auto;
  overflow:               hidden;
  @media screen and (max-width: 500px) {
    display:                  inline-block;
  }
`;
export const ServiceImg = styled.img`
  ${'' /* margin-top:            -24px; */}
  margin-bottom:         -24px;
  ${'' /* padding:               5%; */}
  width:                 auto;
  height:                auto;
  overflow:              hidden;
  transition-duration:   0.5s;

  &:hover{
    -webkit-transform:        scale(1.2);
    -ms-transform:            scale(1.2);
    transform:                scale(1.2);
    border-radius: 78px;
  }
  border-radius: 20px;
`;

/** Service text container */
export const GrpSerText = styled.div`
  text-align:           ${props => props.isRTL ? 'right' : 'left'};
  padding:              ${props => props.isRTL ? '0 40px 0 0':'0 0 0 40px'};
  overflow:             hidden;
`;


export const ServiceText = styled(H1)`
  font-size:            x-large;
  text-transform:       initial;
  font-weight:          bold;
  ${'' /* text-align: justify;
    text-justify: inter-character;
    color: white; */}
    color: white;
`;

export const ServiceSubText = styled(P)`
  font-size:            large;
`;