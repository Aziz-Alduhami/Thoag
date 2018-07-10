import styled from "styled-components";

export const Button = styled.img`
    /* Size */
    max-width:15%;
    max-height:15%;
    width: auto;
    height: auto;
    /* Effects */
    opacity: 0.6;
    transition: opacity 0.5s ease;
    &:hover{
    opacity: 1;
    }
    @media screen and (max-width: 500px) {
        top:              1.5vh;
        position:         relative;
        max-width:        40%;
        max-height:       40%;
        width:            auto;
        height:           auto;
    }
`;

export const H1 = styled.h1`
    color:            white;
    display:          inline-block;
    font-family:      "Noto Sans", sans-serif;
    font-size:        x-large;
    font-weight:      600;
    left:             0;       
    text-transform:   uppercase;      
`;