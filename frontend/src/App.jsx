import Header from "../components/header.jsx";
import Account from "../components/account.jsx";
import Form from "../components/form.jsx";
import Posts from "../components/posts.jsx";

function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Account />
                <Form />
                <Posts />
            </main>
        </>
    );
}

export default App;
