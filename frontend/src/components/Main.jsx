import Account from "./Account.jsx";
import Form from "./Form.jsx";
import Posts from "./Posts.jsx";

import Styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Main1 = Styled.main`
padding: 0 100px;
margin: 10px auto;
`;

export default function Main() {
    const [postdata, setPostdata] = useState([]);
    const [authorSlug, setAuthorSlug] = useState("john-doe");
    const [inputFirstValue, setInputFirstValue] = useState("John");
    const [inputSecondValue, setInputSecondValue] = useState("Doe");
    const combineName = inputFirstValue + " " + inputSecondValue;

    useEffect(() => {
        axios
            .get(`http://localhost:8080/twoots`)
            .then((data) => {
                console.log("Twoots:", data.data);
                setPostdata([...data.data]);
            })
            .catch((err) => {
                console.log("ERROR:", err);
            });
    }, []);

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
