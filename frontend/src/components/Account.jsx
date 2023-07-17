import { useState } from "react";
import styled from "styled-components";

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
    const [name, setName] = useState("");
    const [inputFirstValue, setinputFirstValue] = useState("John");
    const [inputSecondValue, setSecondValue] = useState("Doe");

    const handleInputChange = (event) => {
        setinputFirstValue(event.target.value);
    };

    const handleButtonClick = () => {
        setName(inputFirstValue);
        setinputFirstValue("");
        setSecondValue("");
    };

    return (
        <Section>
            <img
                src="https://avatars.dicebear.com/api/bottts/${authorSlug}.svg"
                height={"150px"}
            />

            <Div>
                <input
                    type="text"
                    value={inputFirstValue}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    value={inputSecondValue}
                    onChange={handleInputChange}
                />
                <Icon
                    onClick={handleButtonClick}
                    src="https://icons.veryicon.com/png/o/miscellaneous/geometry-icon-library/input-21.png"
                    height={"30rem"}
                />
            </Div>
            <p>@john-doe</p>
        </Section>
    );
}
