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
    return (
        <Section>
            <img
                src="https://avatars.dicebear.com/api/bottts/${authorSlug}.svg"
                height={"150px"}
            />
            <Div>
                <h3>John Doe</h3>
                <Icon
                    src="https://icons.veryicon.com/png/o/miscellaneous/geometry-icon-library/input-21.png"
                    height={"30rem"}
                />
            </Div>
            <p>@john-doe</p>
        </Section>
    );
}
