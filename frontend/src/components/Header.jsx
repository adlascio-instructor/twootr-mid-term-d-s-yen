import styled from "styled-components";

const Div = styled.div`
    display: flex;
    background-color: #711a75;
    color: white;
`;

const FirstH3 = styled.h3`
    margin-left: 1rem;
`;

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: 1rem;
`;

const IMG = styled.img`
    justify-content: center;
    align-items: center;
`;

export default function Header() {
    return (
        <Div>
            <FirstH3>TWOOTR</FirstH3>
            <RightDiv>
                <h3>Write a new tweet</h3>
                <IMG
                    src="https://cdn-icons-png.flaticon.com/256/9053/9053268.png"
                    height="30px"
                />
            </RightDiv>
        </Div>
    );
}
