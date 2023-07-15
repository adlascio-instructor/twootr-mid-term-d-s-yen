import Styled from "styled-components";

const Form1= Styled.form`
    position: relative;
    background-color: rgba(0, 0, 255, 0.3);
    padding: 10px;
    margin: 10px auto;
`;

const H2= Styled.h2`
    margin: 0.5rem 0;
    margin-top: 0;
    `;

const TextArea =Styled.textarea`
    display: block;
    width: 90%;
`;

const LetterCount=Styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

export default function Form(){

    return (

    <Form1>
        <H2>Compose Twoot</H2>
        <TextArea name="twoot" rows="3" placeholder="What are you humming about?"></TextArea>
        <button type="submit">Twoot</button>
        <LetterCount>count</LetterCount>
    </Form1>
    
    )

}
