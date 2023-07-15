import styled from "styled-components";

const Div = styled.div`
    display: flex;
    background-color: #711a75;
    color: white;
`;

const FirstH3 = styled.h3`
    margin-left: 1rem;
`;

const SecondH3 = styled.h3`
    margin-left: auto;
    margin-right: 1rem;
`;

export default function Header() {
    return (
        <Div>
            <FirstH3>TWOOTR</FirstH3>
            <SecondH3>Write a new tweet</SecondH3>
        </Div>
    );
}
