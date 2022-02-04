import React from 'react';
import styled from 'styled-components';


const MediaView = () => {

	const Container = styled.div`
		width: 100%;
		display: grid;
		height: 100vh;
		grid-template-columns: 1fr 0.5fr;
		grid-template-areas:
			"media profile"
			"media comments"
			"media comments"
			"media comments";
		text-align: center;
		grid-gap: 0.25rem;
	`;

	const Media = styled.div`
		background: yellow;
		grid-area: media;

	`;

	const Profile = styled.div`
		background: red;
		grid-area: profile;

	`;

	const Comments = styled.div`
		background: blue;
		grid-area: comments;
	`;

	return (
		<Container>
			<Media>Media goes here</Media>
			<Profile>Profile info goes here</Profile>
			<Comments>Comments go here</Comments>
			

		</Container>


		)
	

}

export default MediaView;