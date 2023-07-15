import Header from "./components/Header.jsx";
import Account from "./components/Account.jsx";
import Form from "./components/Form.jsx";
import Posts from "./components/Posts.jsx";
import Styled from "styled-components";

const Main= Styled.main`
    padding: 0 100px;
    margin: 10px auto;
`;

function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <Main>
                <Account />
                <Form />
                <Posts />
            </Main>
        </>
    );
}

export default App;
