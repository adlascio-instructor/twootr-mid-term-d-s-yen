import { useState } from "react";
import Styled from "styled-components";
import { keyframes, css } from "styled-components";

const fillColorBase= "#888888"
const fillColor1= "#00C20D"
const fillColor2= "blue"
const fillColor3= "rgb(255,55,180)"

const SVG= Styled.svg.attrs({
    width:"18",
    height:"18",
    viewBox:"0 0 7.9375002 6.6145835"
  })`
    margin: 0 5px;
    overflow: visible;
`;
const SVG1= Styled(SVG)`
    fill:${(props)=>props.click ? css`${fillColor1}`: css`${fillColorBase}`};
`;
const SVG2= Styled(SVG)`
    fill:${(props)=>props.click ? css`${fillColor2}`: css`${fillColorBase}`};
`;
const SVG3= Styled(SVG)`
    fill:${(props)=>props.click ? css`${fillColor3}`: css`${fillColorBase}`};
`;

const wave= keyframes`
    0% {
        transform: rotate(45deg) scale(1) scaleX(1);
        fill: ${fillColorBase};
        animation-timing-function: ease-in;
    }
    16% {
        transform: scale(1.7);
        animation-timing-function: ease-out;
    }
    32% {
        transform: rotate(-45deg) scale(1) scaleX(1);
        fill: #24FF32;
    }
    33% {
        transform: rotate(-45deg) scaleX(-1);
    }
    65% {
        transform: rotate(45deg) scaleX(-1);
    }
    66% {
        transform: rotate(45deg) scaleX(1);
    100% {
        transform: rotate(0deg) scaleX(1);
        fill: ${fillColor1};
    }

`;
const Path1= Styled.path`
    transform-origin: left bottom;
    animation-name: ${(props)=>props.click ? css`${wave}`: css`none`};
    animation-duration: 1.5s;
`;

const rotate= keyframes`
    0% {
        transform: rotate(0deg) scale(1);
        animation-timing-function: ease-in;
        fill: ${fillColorBase};
    }

    50% {
        transform: rotate(180deg) scale(1.7);
        animation-timing-function: ease-out;
        fill: yellow;
    }
    
    100% {
        transform: rotate(360deg) scale(1);
        fill: ${fillColor2};
    }
`;

const Path2= Styled.path`
    transform-origin: center center;
    animation-name: ${(props)=>props.click ? css`${rotate}`: css`none`};
    animation-duration: 1s;
`;

const zoom= keyframes`
    from{
        transform: scale(1);
        opacity: 1;
    }
    to{
        transform: scale(3);
        opacity: 0;
    }
`
const Path3= Styled.path`
    transform-origin: center center;
    animation-name: ${(props)=>props.click ? css`${zoom}`: css`none`};
    animation-duration: 1.5s;
`;

export default function Icons(){

    const [bgcolor1, setBgColor1]=useState(false)
    const [bgcolor2, setBgColor2]=useState(false)
    const [bgcolor3, setBgColor3]=useState(false)
    
    const bgColorChange=(e)=>{
        
        if(e.target.classList.contains("svg1")){
            setBgColor1(!bgcolor1)
        }else if(e.target.classList.contains("svg2")){
            setBgColor2(!bgcolor2)
        }else{
            setBgColor3(!bgcolor3)
        }
    }

    return (
        <>
            <SVG1 click={bgcolor1 ? 1:0} onClick={bgColorChange} className="svg1">
                <g>
                    <Path1 click={bgcolor1 ? 1:0}
                        className="svg1"
                        d="m 2.8466378,0.02914914 c -0.87075,0 -1.5765405,0.20251489 -1.5765405,0.45215743 V 4.3018394 c 0.021585,-0.2442507 0.7193961,-0.4402138 1.5765405,-0.4402138 0.8707499,0 1.5765404,0.202515 1.5765404,0.4521576 0,0.2496427 0.7057905,0.4521576 1.5765406,0.4521576 0.8707498,0 1.5765404,-0.2025147 1.5765404,-0.4521576 V 0.49325036 C 7.5546756,0.73750105 6.856863,0.93346418 5.9997188,0.93346418 c -0.8707501,0 -1.5765406,-0.2025149 -1.5765406,-0.45215761 0,-0.24964254 -0.7057905,-0.45215743 -1.5765404,-0.45215743 z M 0.36124079,0.40452524 V 6.5854342 H 0.97231501 V 0.40452524 Z"
                        />
                </g>
            </SVG1>

            <SVG2 click={bgcolor2 ? 1:0} onClick={bgColorChange} className="svg2">
                <g>
                    <Path2 click={bgcolor2 ? 1:0}
                        className="svg2"
                        d="M 1.5827369,0.69905502 2.2317102e-6,2.2825342 H 0.67821077 1.244005 V 5.2879435 L 1.8715898,5.9155283 H 4.4057521 V 5.2879435 H 2.1209858 L 1.8715898,5.0378028 V 2.2825342 h 1.2946264 z m 1.949012,0 V 1.3266399 H 5.816515 L 6.0659112,1.5767804 V 4.3320491 H 4.7712848 L 6.354764,5.9155283 7.9374988,4.3320491 H 7.2592902 6.693496 V 1.3266399 L 6.0659112,0.69905502 Z"
                        />
                </g>
            </SVG2>

            <SVG3 click={bgcolor3 ? 1:0} onClick={bgColorChange} className="svg3">
                <g>
                    <path  click={bgcolor3 ? 1:0}
                        className="svg3"
                        d="M 2.0438286,2.0920537e-7 A 1.9324314,1.8706734 0 0 0 0.11153195,1.8705433 1.9324314,1.8706734 0 0 0 0.65552513,3.1704993 L 0.65434913,3.1710704 3.9761291,6.614583 7.2825688,3.1710704 7.2813888,3.1704993 A 1.9324314,1.8706734 0 0 0 7.825968,1.8705433 1.9324314,1.8706734 0 0 0 5.8930813,2.0920537e-7 1.9324314,1.8706734 0 0 0 3.968455,1.7083344 1.9324314,1.8706734 0 0 0 2.0438286,2.0920537e-7 Z"
                        />
                    <Path3  click={bgcolor3 ? 1:0}
                        className="svg3"
                        d="M 2.0438286,2.0920537e-7 A 1.9324314,1.8706734 0 0 0 0.11153195,1.8705433 1.9324314,1.8706734 0 0 0 0.65552513,3.1704993 L 0.65434913,3.1710704 3.9761291,6.614583 7.2825688,3.1710704 7.2813888,3.1704993 A 1.9324314,1.8706734 0 0 0 7.825968,1.8705433 1.9324314,1.8706734 0 0 0 5.8930813,2.0920537e-7 1.9324314,1.8706734 0 0 0 3.968455,1.7083344 1.9324314,1.8706734 0 0 0 2.0438286,2.0920537e-7 Z"
                    />
                </g>
            </SVG3>
        </>
    )
} 