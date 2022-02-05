import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles.module.css";
import AcctCircle from "../AcctCircle";
import {
  Media,
  Container,
  Profile,
  Comments,
  InputComment,
} from "./MediaComponentElements";

const MediaView = () => {
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
      <Comments>Comments go here</Comments>
      <InputComment type="text" placeholder="Add a comment..."></InputComment>
    </Container>
  );
};

export default MediaView;
