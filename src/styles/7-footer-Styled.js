import styled from "styled-components"

export const FooterContainer = styled.section.attrs({
  dir: props => props.isRTL ? 'rtl' : 'ltr'
})`
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  color:              #626262;
  background:         #1a1a1a;
  padding-right:      10%;
  padding-left:       10%;
  height:             200px;
`;

export const Hr = styled.hr`

  border-color: #C12336;
  background-color: #C12336;
  height:5px;
`;