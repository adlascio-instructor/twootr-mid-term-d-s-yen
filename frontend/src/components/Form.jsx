import Styled from "styled-components";
import { useState, useRef } from "react";

const Form1= Styled.form`
    position: relative;
    padding: 10px;
    margin: 10px auto;
`;

const H2= Styled.h2`
    margin: 0.5rem 0;
    margin-top: 0;
`;

const TextArea =Styled.textarea`
    display: block;
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    resize: none;
    
    &: focus{
        outline: none;
    }
`;

const LetterCount=Styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const Button= Styled.button`
    background: #7FEBBC;
    border: none;
    border-radius: 3px;
    padding: 7px;
    margin-top: 5px;
    color: #063520;
    &: hover {
        background: #35E699;
    }
    &: active {
        background: #12C477;
    }
    &: disabled {
        background: #cccccc;
        color: grey;
    }
`;

export default function Form(){
    
    const [formData, setFormData] = useState("");
    const formRef= useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submitted.");
        // Code here
    }

    const handleChange=(e)=>{
        const count=140-formRef.current.value.length;
        const submitButton= document.querySelector(".submitButton");
        const letterCount= document.querySelector(".count");
        const value= e.target.value;
        setFormData(()=>({value}));
        letterCount.textContent= count;

        if(count<0){
            letterCount.style.color="red";
        }else{
            letterCount.style.color="black";
        }

        if(count<0 || count==140){
            submitButton.disabled= true;
        }else{
            submitButton.disabled= false;
        }

        const textArea= document.querySelector("textarea");
        const scrollHeight= textArea.scrollHeight;
        console.log("tetxtarea",scrollHeight)
        // textArea.row=Math.ceil(scrollHeight/19);
        textArea.setAttribute("rows", Math.ceil(scrollHeight/19)
        );
    }

    return (

    <Form1 onSubmit={handleSubmit}>
        <H2>Compose Twoot</H2>
        <TextArea
        
            onChange={handleChange}
            ref={formRef}
            name="twoot"
            rows="1"
            placeholder="What are you humming about?"
        ></TextArea>
        <Button className="submitButton" type="submit" disabled>Twoot</Button>
        <LetterCount className="count">140</LetterCount>
    </Form1>
    
    );
};