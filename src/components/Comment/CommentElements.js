import styled from "styled-components";
import { Heart } from '@styled-icons/bootstrap/Heart';

export const Container = styled.div`
  background: purple;
  display: flex;
`;

export const Text = styled.div`
	max-width: 65%;
	text-align: left;

`;

export const LikeHeart = styled(Heart)`
	color: red;
	height: 100%;
	flex: 1;
	height: 15px;
`;