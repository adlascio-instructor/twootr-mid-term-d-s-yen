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
            <Account />
            <Form />
            <Posts postdata={postdata} />
        </Main1>
    );
}
