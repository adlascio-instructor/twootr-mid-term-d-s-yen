import { useState } from "react";
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

export default function Account() {
    const [input, setInput] = useState("noShow");
    const [name, setName] = useState("show");
    const [icon, setIcon] = useState("show");
    const [checkedIcon, setCheckedIcon] = useState("noShow");

    const isShowingInput = input === "noShow";
    const isShowingName = name === "show";
    const isShowingCheckedIcon = checkedIcon === "noShow";
    const isShowingIcon = icon === "show";

    const [inputFirstValue, setInputFirstValue] = useState("John");
    const [inputSecondValue, setInputSecondValue] = useState("Doe");

    const handleFirstValue = (e) => {
        setInputFirstValue(e.target.value);
    };

    const handleSecondValue = (e) => {
        setInputSecondValue(e.target.value);
    };

    const toggle = () => {
        setName(!"show");
        setInput(!"show");
        setCheckedIcon(!"show");
        setIcon(!"show");
    };

    return (
        <Section>
            <img
                src="https://avatars.dicebear.com/api/bottts/${authorSlug}.svg"
                height={"150px"}
            />

            <Div>
                <h3 style={isShowingName ? showing : notShowing}>John</h3>
                <h3 style={isShowingName ? showing : notShowing}>Doe</h3>
                <input
                    style={isShowingInput ? notShowing : showing}
                    value={inputFirstValue}
                    onChange={handleFirstValue}
                />
                <input
                    style={isShowingInput ? notShowing : showing}
                    value={inputSecondValue}
                    onChange={handleSecondValue}
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
                />
            </Div>
            <UserAccordingInput>
                <h4>{inputFirstValue}</h4>
                <h4>{inputSecondValue}</h4>
            </UserAccordingInput>
        </Section>
    );
}
