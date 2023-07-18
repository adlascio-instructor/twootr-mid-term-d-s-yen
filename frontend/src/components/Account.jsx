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

export default function Account() {
    const [input, setInput] = useState("noShow");
    const [name, setName] = useState("noShow");
    const isShowingInput = input === "noShow";
    const isShowingName = name === "noShow";

    const toggle = () => {
        setName(!"noShowshow");
        setInput(!"show");
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
                <input style={isShowingInput ? notShowing : showing} />
                <input style={isShowingInput ? notShowing : showing} />
                <Icon
                    onClick={toggle}
                    src="https://icons.veryicon.com/png/o/miscellaneous/geometry-icon-library/input-21.png"
                    height={"30rem"}
                >
                    {/* {state ? "close" : "open"} */}
                </Icon>
            </Div>
            <p>@john-doe</p>
        </Section>
    );
}
