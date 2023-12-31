import { useState, useRef } from "react";
import styled from "styled-components";

const notShowing = {
    display: "none",
};

const showing = {
    display: "block",
};

const Section = styled.section`
    padding: 0;
    text-align: center;
    background-color: #413f42;
    color: white;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Icon = styled.img`
    margin-left: 0.5rem;
`;

const CheckedIcon = styled.img`
    margin-left: 0.5rem;
    height: 35px;
`;

const UserAccordingInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default function Account(props) {
    const inputFirstRef = useRef(null);
    const inputSecondRef = useRef(null);
    const h3FirstRef = useRef(null);
    const h3SecondRef = useRef(null);

    const [input, setInput] = useState("noShow");
    const [name, setName] = useState("show");
    const [icon, setIcon] = useState("show");
    const [checkedIcon, setCheckedIcon] = useState("noShow");

    const isShowingInput = input === "noShow";
    const isShowingName = name === "show";
    const isShowingCheckedIcon = checkedIcon === "noShow";
    const isShowingIcon = icon === "show";

    // const combineName = props.inputFirstValue + " " + props.inputSecondValue;
    // console.log(combineName, "combineName");

    const handleFirstValue = (e) => {
        props.setInputFirstValue(e.target.value);
        props.setAuthorSlug(
            `${e.target.value.toLowerCase()}-${props.inputSecondValue.toLowerCase()}`
        );
    };

    const handleSecondValue = (e) => {
        props.setInputSecondValue(e.target.value);
        props.setAuthorSlug(
            `${props.inputFirstValue.toLowerCase()}-${e.target.value.toLowerCase()}`
        );
    };

    const toggle = () => {
        setName(name === "show" ? "noShow" : "show");
        setInput(input === "show" ? "noShow" : "show");
        setCheckedIcon(checkedIcon === "show" ? "noShow" : "show");
        setIcon(icon === "show" ? "noShow" : "show");
    };

    const handleSubmit = () => {
        setName(name === "show" ? "noShow" : "show");
        setInput(input === "show" ? "noShow" : "show");
        setCheckedIcon(checkedIcon === "show" ? "noShow" : "show");
        setIcon(icon === "show" ? "noShow" : "show");

        if (h3FirstRef.current && h3SecondRef.current) {
            h3FirstRef.current.innerText = inputFirstRef.current.value + " ";
            h3SecondRef.current.innerText = inputSecondRef.current.value;
        }
    };

    return (
        <Section>
            <img
                src={`https://avatars.dicebear.com/api/bottts/${props.authorSlug}.svg`}
                height={"150px"}
            />

            <Div>
                <h3
                    style={isShowingName ? showing : notShowing}
                    ref={h3FirstRef}
                >
                    John&nbsp;
                </h3>
                <h3
                    style={isShowingName ? showing : notShowing}
                    ref={h3SecondRef}
                >
                    Doe
                </h3>
                <input
                    style={isShowingInput ? notShowing : showing}
                    value={props.inputFirstValue}
                    onChange={handleFirstValue}
                    ref={inputFirstRef}
                />
                &nbsp;
                <input
                    style={isShowingInput ? notShowing : showing}
                    value={props.inputSecondValue}
                    onChange={handleSecondValue}
                    ref={inputSecondRef}
                />
                <Icon
                    style={isShowingIcon ? showing : notShowing}
                    onClick={toggle}
                    src="https://icons.veryicon.com/png/o/miscellaneous/geometry-icon-library/input-21.png"
                    height={"30rem"}
                />
                <CheckedIcon
                    style={isShowingCheckedIcon ? notShowing : showing}
                    src="https://cdn-icons-png.flaticon.com/512/5289/5289675.png"
                    onClick={handleSubmit}
                />
            </Div>
            <UserAccordingInput>
                <h4>@{props.inputFirstValue.toLowerCase()}-</h4>
                <h4>{props.inputSecondValue.toLowerCase()}</h4>
            </UserAccordingInput>
        </Section>
    );
}
