import React from 'react';
import styled from 'styled-components';
import styles from "../styles/styles.module.css";


const AcctCircle = (props) => {
	const Circle = styled.div`
		border-radius: 50%;
		background: gray;
		display: block;
		height: ${props => props.height};
		width: ${props => props.width};

	`;

	return (
		<a href={props.profile}>
			<Circle width={props.width} height={props.height}>
				<img src={props.src} alt={props.alt} className={styles.profileImg}/>
			</Circle>
		</a>
	)
}

export default AcctCircle;