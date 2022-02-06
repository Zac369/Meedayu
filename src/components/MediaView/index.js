import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles.module.css";
import AcctCircle from "../AcctCircle";
import Comment from "../Comment";
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Media,
  Container,
  Profile,
  Comments,
  InputComment,
} from "./MediaComponentElements";



const MediaView = () => {

  const [comments, setComments] = useState();
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    async function getComments() {
      axios.get(``)
        .then(res => {
          const commentArray = res.data;
          const image = res.data;
          setComments(commentArray);
          setImgUrl(image);
        });

    }

    getComments();

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
      <Media>
        <img src={imgUrl} />
      </Media>
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
      {testCommentArray.map( comment => <Comment comment={comment} />)}
      </Comments>
      <div className={styles.commentInputWrapper}>
        <AcctCircle width="35px" height="35px" />
        <InputComment type="text" placeholder="Add a comment..." style={{width: "100%", marginRight: "1em"}}></InputComment>
      </div>
    </Container>
  );
};

export default MediaView;
