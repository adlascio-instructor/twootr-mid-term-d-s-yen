import Styled from "styled-components";
import { useState } from "react";
import { keyframes, css } from "styled-components";
import axios from "axios";

const shake = keyframes`
    0% {left: 0; background-color: #FF1A1D;}
    20% {left: -25px;}
    40% {left: 18px;}
    60% {left: -10px;}
    80% {left: 5px;}
    100% {left: 0; background-color: pink;}
`;

const Form1 = Styled.form`
    position: relative;
    padding: 10px;
    margin: 10px auto;
    width: 80%;
    animation-name:${(props) =>
        props.validation
            ? css`
                  ${shake}
              `
            : css`null`};
    animation-duration: .7s;
    animation-timing-function: linear;
    background-color:${(props) => (props.validation ? css`pink` : css`none`)};
`;

const H2 = Styled.h2`
    margin: 0.5rem 0;
    margin-top: 0;
`;

const TextArea = Styled.textarea`
    display: block;
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    resize: none;
    background: none;

    &: focus{
            outline: none;
        }
`;

const LetterCount = Styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const Button = Styled.button`
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

export default function Form(props) {
    const [formData, setFormData] = useState("");
    const [validation, setValidation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateState();
        props.forwardedRef.current.value= "";
        document.querySelector(".count").textContent= "140";
        document.querySelector(".submitButton").disabled= true;

        const newdate= new Date()
        const dateAdded= `${newdate.getFullYear()}-${newdate.getMonth()+1}-${newdate.getDate()}`

        const testData = {
            newTwoot: {
                author: props.combineName,
                content: formData,
                authorSlug: props.authorSlug,
                dateAdded: dateAdded
            },
        };
        axios
            .post(`http://localhost:8080/twoot`, testData)
            .then((response) => {
                console.log("Response", response.data);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    };

    const handleChange = (e) => {
        const count = 140 - props.forwardedRef.current.value.length;
        const submitButton = document.querySelector(".submitButton");
        const letterCount = document.querySelector(".count");

        setFormData(() => e.target.value);
        letterCount.textContent = count;

        if (count < 0) {
            letterCount.style.color = "red";
            setValidation(true);
        } else {
            letterCount.style.color = "black";
            setValidation(false);
        }

        if (count < 0 || count == 140) {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }

        const textArea = document.querySelector("textarea");
        const scrollHeight = textArea.scrollHeight;
        textArea.setAttribute("rows", Math.ceil(scrollHeight / 19));
    };

    return (
        <Form1 validation={validation ? 1 : 0} onSubmit={handleSubmit}>
            <H2>Compose Twoot</H2>
            <TextArea
                onChange={handleChange}
                ref={props.forwardedRef}
                name="twoot"
                rows="1"
                placeholder="What are you humming about?"
            />
            <Button className="submitButton" type="submit" disabled>
                Twoot
            </Button>
            <LetterCount className="count">140</LetterCount>
        </Form1>
    );
}
