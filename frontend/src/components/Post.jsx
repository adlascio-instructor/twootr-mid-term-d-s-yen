import Styled from "styled-components";

const Article = Styled.article`
    background-color: rgba(0, 0, 255, 0.3);
    position: relative;
    padding: 10px;
`;

const Account = Styled.div`
    display: flex;
`;

const Paragraph = Styled.p`
    background-color: rgba(0, 0, 255, 0.3);
    padding: 10px;
    margin: 0;
`;

const UserName = Styled.div`
    position: absolute;
    display: flex;
    right: 10px;
    top: 5px;
`;

const Buttons = Styled.div`
    position: absolute;
    display: flex;
    right: 10px;
    bottom: 5px;
`;

const Button = Styled.div`
    margin: 3px;
`;

export default function Post({ props }) {
    return (
        <Article>
            <Account>
                <div>icon </div>
                <div> {props.author}</div>
            </Account>
            <Paragraph>{props.content}</Paragraph>
            <div className="ago">...ago</div>
            <UserName>@{props.authorSlug} </UserName>
            <Buttons>
                <Button>🏳️</Button>
                <Button>🔄</Button>
                <Button>💗</Button>
            </Buttons>
        </Article>
    );
}
