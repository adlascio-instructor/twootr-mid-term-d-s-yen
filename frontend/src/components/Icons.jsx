import Styled from "styled-components";

const SVG=Styled.svg`
    fill:#555555;
    margin: 0 5px;
`;

export default function Icons(){
    
    const bgColor=(e)=>{
        if(e.target.classList.contains("on")){
            e.target.style.fill="#555555"
            e.target.classList.remove("on")
        }else{
            e.target.style.fill="rgb(255,55,180)"
            e.target.classList.add("on")
        }
    }

    return (
        <>
            <SVG onClick={bgColor} className="svg1" width="18" height="18" viewBox="0 0 7.9375002 6.6145835">
                <g>
                    <path
                        id="svg1"
                        d="m 2.8466378,0.02914914 c -0.87075,0 -1.5765405,0.20251489 -1.5765405,0.45215743 V 4.3018394 c 0.021585,-0.2442507 0.7193961,-0.4402138 1.5765405,-0.4402138 0.8707499,0 1.5765404,0.202515 1.5765404,0.4521576 0,0.2496427 0.7057905,0.4521576 1.5765406,0.4521576 0.8707498,0 1.5765404,-0.2025147 1.5765404,-0.4521576 V 0.49325036 C 7.5546756,0.73750105 6.856863,0.93346418 5.9997188,0.93346418 c -0.8707501,0 -1.5765406,-0.2025149 -1.5765406,-0.45215761 0,-0.24964254 -0.7057905,-0.45215743 -1.5765404,-0.45215743 z M 0.36124079,0.40452524 V 6.5854342 H 0.97231501 V 0.40452524 Z"
                        />
                </g>
            </SVG>

            <SVG onClick={bgColor} className="svg2" width="18" height="18" viewBox="0 0 7.9375002 6.6145835">
                <g>
                    <path
                        id="svg2"
                        d="M 1.5827369,0.69905502 2.2317102e-6,2.2825342 H 0.67821077 1.244005 V 5.2879435 L 1.8715898,5.9155283 H 4.4057521 V 5.2879435 H 2.1209858 L 1.8715898,5.0378028 V 2.2825342 h 1.2946264 z m 1.949012,0 V 1.3266399 H 5.816515 L 6.0659112,1.5767804 V 4.3320491 H 4.7712848 L 6.354764,5.9155283 7.9374988,4.3320491 H 7.2592902 6.693496 V 1.3266399 L 6.0659112,0.69905502 Z"
                        />
                </g>
            </SVG>

            <SVG onClick={bgColor} className="svg3" width="18" height="18" viewBox="0 0 7.9375002 6.6145835">
                <g>
                    <path
                        id="svg3"
                        d="M 2.0438286,2.0920537e-7 A 1.9324314,1.8706734 0 0 0 0.11153195,1.8705433 1.9324314,1.8706734 0 0 0 0.65552513,3.1704993 L 0.65434913,3.1710704 3.9761291,6.614583 7.2825688,3.1710704 7.2813888,3.1704993 A 1.9324314,1.8706734 0 0 0 7.825968,1.8705433 1.9324314,1.8706734 0 0 0 5.8930813,2.0920537e-7 1.9324314,1.8706734 0 0 0 3.968455,1.7083344 1.9324314,1.8706734 0 0 0 2.0438286,2.0920537e-7 Z"
                        />
                </g>
            </SVG>
        </>
    )
} 