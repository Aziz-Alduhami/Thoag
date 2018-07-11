import styled from "styled-components";


export const H1 = styled.h1`
    color:            rgb(54, 54, 54);
    display:          inline-block;
    font-family:      "Noto Sans", sans-serif;
    font-size:        xx-large;
    font-weight:      700;
    left:             0;       
    text-transform:   uppercase;
    box-sizing:       border-box;    
`;

export const P = styled.p`
    color:            rgb(98, 98, 98);
    font-weight:      400;
    font-family:      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ;
    font-size:        x-large;
`;


const RedButton = styled.button`
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
        position:         relative;
        width:            80%;
    }
`;

export const ImgButton = styled.img`
    /* Size */
    max-width:				15%;
    max-height:				15%;
    width: 				    auto;
    height: 				auto;
    /* Effects */
    opacity: 					0.6;
    transition: 			    opacity 0.5s ease;
    &:hover{
        opacity: 					1;
    }
    @media screen and (max-width: 500px) {
        opacity:          1;
        top:              1.5vh;
        position:         relative;
        max-width:        40%;
        max-height:       40%;
    }
`;


export const Input = styled.input`
		margin-bottom: 			15px;
		padding: 						5px 15px 15px 5px; /* top > right > bottom > left */
		margin: 						0.5%;
		background-color: 	rgb(243, 243, 243);
		cursor: 						auto;
		border: 						1px solid #e6e6e6;
		border-radius: 			3px;
		width: 							40%;
		@media screen and (max-width: 500px) {
				width: 						90%;
		}
`;

export const Select = styled.select`
		display: 						inline-block;
		margin-bottom: 			5px;
		padding:						5px 15px 15px 5px;
		margin: 						0.5%;
		background-color: 	#f3f3f3;
		cursor: 						auto;
		border: 						1px solid #e6e6e6;
		border-radius: 			3px;
		width: 							40%;
		@media screen and (max-width: 500px) {
				width: 						90%;
		}
`;

// const Button = styled.img`
//     /* Size */
//     max-width:15%;
//     max-height:15%;
//     width: auto;
//     height: auto;
//     /* Effects */
//     opacity: 0.6;
//     transition: opacity 0.5s ease;
//     &:hover{
//        opacity: 1;
//     }
//     @media screen and (max-width: 500px) {
//         top:              1.5vh;
//         position:         relative;
//         max-width:        40%;
//         max-height:       40%;
//         width:            auto;
//         height:           auto;
//     }
// `;
// const BtniOS = styled.button`
//     direction:        ${props => props.isRTL ? 'rtl' : 'ltr'};
//     opacity: 0.6;
//     color:rgb(33, 33, 33);
//     width: 220px;
//     height: 50px;
//     position: relative;
//     font-size: 1.1em;
//     font-weight: 600;
//     padding: 9px 15px 7px 50px;   
//     background: url(${AppleIcon});
//     background-color: #ffffff;
//     background-size: 37px;
//     background-position: 8px 6px;
//     background-repeat: no-repeat;
//     border: none;
//     border-radius: 3px;
//     transition: opacity 0.5s ease;
//     &:hover{
//       opacity: 1;
//     }
//     &:hover, &:visited, &:link, &:active{
//       text-decoration: none;
//     }
// `;
// const BtnAndroid = styled.img`
//     /* Size */
//     max-width:15%;
//     max-height:15%;
//     width: auto;
//     height: auto;
//     /* Effects */
//     opacity: 0.6;
//     transition: opacity 0.5s ease;
//     &:hover{
//        opacity: 1;
//     }
// `;