import Styled from "styled-components";
import Icons from "./Icons.jsx";

const Article = Styled.article`
    background-color: rgba(0, 0, 255, 0.2);
    position: relative;
    padding: 10px 20px;
    margin :10px auto;
    border-radius: 5px;
`;

const Img = Styled.img`
    width: 30px;
    margin-right:5px;
`;

const Account = Styled.div`
    display: flex;
    align-items: center;
`;

const Paragraph = Styled.p`
    border-bottom: 1px solid black;
    padding: 0;
    margin: 10px auto;
`;

const UserName = Styled.div`
    position: absolute;
    display: flex;
    padding: 10px 20px;
    box-sizing: border-box;
    right: 0;
    top: 0;
`;

const Buttons = Styled.div`
    position: absolute;
    display: flex;
    padding: 10px 20px;
    box-sizing: border-box;
    right: 0;
    bottom: 0;
`;

export default function Post(props) {

    const dateAdded= new Date(props.content.dateAdded.split("-").join("/"))
    const currentDate= new Date()
    
    // console.log("date1",props.content.dateAdded)
    // console.log("date2",dateAdded)
    // console.log("date3",currentDate)

    const differenceMS= currentDate.getTime()-dateAdded.getTime()
    const differenceD= Math.floor(differenceMS/(1000*60*60*24))

    const url=`https://avatars.dicebear.com/api/bottts/${props.content.authorSlug}.svg`

    return (
        <Article>
            <Account>
                <Img src={url} alt="avatarIcon"/>
                <div> {props.content.author}</div>
            </Account>
            <Paragraph><b>{props.content.content}</b></Paragraph>
            <div className="ago">Twooted {differenceD} days ago</div>
            <UserName>@{props.content.authorSlug} </UserName>
            <Buttons>
                <Icons/>
            </Buttons>
        </Article>
    );
}
