import React from 'react';
import styled from 'styled-components';

export const Media = styled.div`
		background: yellow;
		grid-area: media;

	`;

export const Container = styled.div`
		width: 100%;
		display: grid;
		height: 95vh;
		grid-template-columns: 1fr 0.5fr;
		grid-template-rows: 0.5fr 4fr 0.5fr;
		grid-template-areas:
			"media profile"
			"media comments"
			"media inputComment";
		text-align: center;
		grid-gap: 0rem;
	`;

export const Profile = styled.div`
		background: red;
		grid-area: profile;
		padding: 1em;

	`;

export const Comments = styled.div`
		background: blue;
		grid-area: comments;
	`;

export const InputComment = styled.input`
		background: green;
		grid-area: inputComment;
	`;