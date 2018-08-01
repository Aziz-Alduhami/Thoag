import styled from "styled-components";
import { injectGlobal } from 'styled-components'


injectGlobal`
	@font-face {
	font-family: 'Tajawal';
	font-style: normal;
	font-weight: 400;
	src: local('Tajawal'), local('Tajawal-Regular'), url(https://fonts.gstatic.com/s/tajawal/v1/Iura6YBj_oCad4k1nzSBC45I.woff2) format('woff2');
	unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC;
}
`

export const H1 = styled.h1`
	color:            rgb(54, 54, 54);
	${'' /* display:          inline-block; */}
	font-family:      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ;
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


export const Input = styled.input.attrs({
	dir: props => props.isRTL ? 'rtl' : 'ltr'
})`
		margin-bottom: 			15px;
		padding: 			    5px 15px 15px 5px; /* top > right > bottom > left */
		margin: 				0.5%;
		background-color: 	    rgb(243, 243, 243);
		cursor: 				auto;
		border: 				1px solid #e6e6e6;
		border-radius: 			3px;
		width: 					40%;
		@media screen and (max-width: 500px) {
				width: 						90%;
		}
`;

export const Select = styled.select`
		display: 				inline-block;
		margin-bottom: 			5px;
		padding:				5px 15px 15px 5px;
		margin: 				0.5%;
		background-color: 	    #f3f3f3;
		cursor: 				auto;
		border: 				1px solid #e6e6e6;
		border-radius: 			3px;
		width: 					40%;
		@media screen and (max-width: 500px) {
				width: 						90%;
		}
`;

export const Submit = styled.input`
		/*Text */
		color:            white;
		font-size:        large;
		font-weight:      600;
		/*Bg and Border */
		background-color: rgb(193, 35, 54);
		border:           none;
		border-radius:    3px;
		/* Size */
		margin-bottom:    5%;
		width: 						81%;
		height:           50px;
		/* Effects */
		transition:       background-color 0.5s ease;

		&:hover{
			background-color: #db0620;
		}
		@media screen and (max-width: 500px) {
			width:            90%;
		}
`;