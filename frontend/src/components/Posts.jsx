import Post from "./Post.jsx";
import Styled from "styled-components";

const Section = Styled.section`
    position: relative;
    margin: 10px auto;
    width: 80%;
`;

export default function Posts(props) {
    return (
        <Section>
            {props.postdata.map((post, index) => (
                <Post key={index} content={post} />
            ))}
        </Section>
    );
}
