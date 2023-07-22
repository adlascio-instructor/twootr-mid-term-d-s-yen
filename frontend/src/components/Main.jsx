import Account from "./Account.jsx";
import Form from "./Form.jsx";
import Posts from "./Posts.jsx";

import Styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

const Main1 = Styled.main`

margin: 0 auto;
`;
// padding: 0 100px;

export default function Main() {
    const [postdata, setPostdata] = useState([]);
    const [authorSlug, setAuthorSlug] = useState("john-doe");
    const [inputFirstValue, setInputFirstValue] = useState("John");
    const [inputSecondValue, setInputSecondValue] = useState("Doe");
    const combineName = inputFirstValue + " " + inputSecondValue;

    const textAreaRef= useRef("");
    const [update, setUpdate]= useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/twoots`)
            .then((data) => {
                console.log("Twoots:", data.data);
                setPostdata([...data.data]);
                console.log("REF:",textAreaRef.current.value)
            })
            .catch((err) => {
                console.log("ERROR:", err);
            });
    }, [update]);

    return (
        <Main1>
            <Account
                inputFirstValue={inputFirstValue}
                inputSecondValue={inputSecondValue}
                setInputFirstValue={setInputFirstValue}
                setInputSecondValue={setInputSecondValue}
                authorSlug={authorSlug}
                setAuthorSlug={setAuthorSlug}
            />
            <Form
                updateState={()=>setUpdate(!update)}
                forwardedRef={textAreaRef}
                inputFirstValue={inputFirstValue}
                inputSecondValue={inputSecondValue}
                combineName={combineName}
                setInputFirstValue={setInputFirstValue}
                setInputSecondValue={setInputSecondValue}
                authorSlug={authorSlug}
                setAuthorSlug={setAuthorSlug}
            />
            <Posts postdata={postdata} />
        </Main1>
    );
}
