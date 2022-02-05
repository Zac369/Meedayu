import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles.module.css";
import AcctCircle from '../AcctCircle';
import { Container, Text, LikeHeart } from './CommentElements';



const Comment = (props) => {



	return (
		<Container className={styles.commentWrapper}>
			<AcctCircle height="35px" width="35px" />
			<Text>{props.comment}</Text>
			<div style={{marginLeft: "auto", paddingRight: "1em"}}>
				<LikeHeart />
			</div>
		</Container>

		)
}

export default Comment;