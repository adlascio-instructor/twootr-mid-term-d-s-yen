import Styled from "styled-components";
import Icons from "./Icons.jsx";
import { useState, useEffect } from "react";
import { css } from "styled-components";

const Article = Styled.article`
    position: relative;
    background-color: #ECF5FD;
    position: relative;
    padding: 10px 20px;
    margin :10px auto;
    border: 1px solid #aaaaaa;
    border-radius: 5px;

    &: hover {
        background-color: #D9EAFC;
        border: 1px solid #888888;
        box-shadow: 5px 5px 10px #aaaaaa;
        top: -1px;
        left: -2px;
    }
`;

const NewPost = Styled.div`

    display: ${(props)=>props.state ? css`block`: css`none`};
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    color: #FF7700;
`

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
    overflow: auto;
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

    const [newpost, setNewpost]= useState(false);

    const dateAdded= new Date(props.content.dateAdded.split("-").join("/"));
    const currentDate= new Date();
    
    // console.log("date1",props.content.dateAdded)
    // console.log("date2",dateAdded)
    // console.log("date3",currentDate)

    const differenceMS= currentDate.getTime()-dateAdded.getTime();
    const differenceD= Math.floor(differenceMS/(1000*60*60*24));

    const url=`https://avatars.dicebear.com/api/bottts/${props.content.authorSlug}.svg`;

    let postedDate;
    switch(differenceD){
        case 0:
        postedDate=`today`;
        break;

        case 1:
        postedDate=`yesterday`;
        break;

        default:
        postedDate=`${differenceD} days ago`;
    }

    useEffect(()=>{
        if(differenceD==0 || differenceD==1){
            setNewpost(true);
        }
    },[])
    
    return (
        <Article>
            <NewPost state={newpost ? 1:0}><b><i>New Post!</i></b></NewPost>
            <Account>
                <Img src={url} alt="avatarIcon"/>
                <div> {props.content.author}</div>
            </Account>
            <Paragraph><b>{props.content.content}</b></Paragraph>
            <div className="ago">Twooted&nbsp;{postedDate}</div>
            <UserName>@{props.content.authorSlug} </UserName>
            <Buttons>
                <Icons/>
            </Buttons>
        </Article>
    );
}
