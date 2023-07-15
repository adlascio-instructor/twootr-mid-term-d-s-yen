import Post from "./Post.jsx";
import Styled from "styled-components";

const Section= Styled.section`
    position: relative;
    background-color: rgba(0, 0, 255, 0.3);
    padding: 10px;
    margin: 10px auto;
`;

export default function Posts(){
    return (
        
        <Section>
            Posts Arae
            <Post/>
        </Section>
        
    )
}