import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles.module.css";
import AcctCircle from "../AcctCircle";
import Comment from "../Comment";
import axios from 'axios';
//import testImage from '../../testImage.png';
import { useState, useEffect } from 'react';
import {
  Media,
  Container,
  Profile,
  Comments,
  InputComment,
} from "./MediaComponentElements";
import { LegendToggle } from "styled-icons/material";






const showComments = (props) => {
  return <Comment comment={props} />
}


const MediaView = () => {

  const [comments, setComments] = useState();

  useEffect(() => {
    async function useDatabase() {

      // get user request, should be sent after web3auth authenticated user
      const params = new FormData();
      params.append('request', 'getUser');
      params.append('username', 'username4'); // username should be username#(first 8 chars of addy)
      params.append('address', 'address123'); // the users addy
      let response = await axios.post('http://localhost/projects/ethglobal2022/serverFiles/index.php', params);
      let userID = response['data']['returned']; // the userID for this user, needed for other DB requests
      console.log("UserID = " + userID);


      // post photo request, store photo in the DB (i need an actual png in here to test it)
      var params2 = new URLSearchParams();
      params2.append('request', 'postPhoto');
      params2.append('userID', userID); // the user id
      params2.append('image', testImage); // the image file
      params2.append('NFT', false); // true/false if the photo is minted
      response = await axios.post('http://localhost/projects/ethglobal2022/serverFiles/index.php', params2);
      console.log(response); // the userID for this user, needed for other DB requests*/


      // get addresses request, currently broken - [2, 3, 4] is being sent to DB as [2, , 3, , 4]
      var params3 = new FormData();
      params3.append('request', 'getAddresses');
      params3.append('userIds', [2, 3, 4]); // should include the userIDs for every user whose address you want
      params3.append('length', 3); // should include the userIDs for every user whose address you want
      response = await axios.post('http://localhost/projects/ethglobal2022/serverFiles/index.php', params3);
      console.log(response);
      
    }

    useDatabase();

  }, []);

  const testCommentArray = [
    "inb4 booba comments",
    "looks dope!",
    "I want to buy this NFT",
    "When's your next stream?",
    "Here's a really long comment for the sake of having one that is really long",
    "lololololol",
    "booba > life"
  ]


  return (
    <Container>
      <Media>Media goes here</Media>
      <Profile>
        <div className={styles.profileWrapper}>
          Username
          <AcctCircle
            profile="https://www.google.com"
            width="50px"
            height="50px"
          />
        </div>
      </Profile>
      <Comments>
      {testCommentArray.map( comment => showComments(comment))}
      </Comments>
      <div className={styles.commentInputWrapper}>
        <AcctCircle width="35px" height="35px" />
        <InputComment type="text" placeholder="Add a comment..." style={{width: "100%", marginRight: "1em"}}></InputComment>
      </div>
    </Container>
  );
};

export default MediaView;
