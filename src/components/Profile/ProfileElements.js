import styled from "styled-components";

export const ProfileTopContainer = styled.div`
  height: 30rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileInnerContainer = styled.div`
  height: 20rem;
  width: 50rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImageContainer = styled.div`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  background-color: brown;
`;

export const ProfileInfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileName = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 2rem;
`;

export const ProfileAddress = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 10px;
  background: #efefef;
`;

export const SubscribeButton = styled.button`
  outline: none;
  border: none;
  background: #62b4ff;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 1rem;
  color: #fff;
  margin: 2rem 2rem;
`;

export const MainGridImageContainer = styled.div`
  background: #efefef;
  margin: 0 auto;
  width: 70vw;
  min-width: 50rem;
`;

export const GridImageContainer = styled.div`
  display: grid;
`;

export const GridImage = styled.img`
  height: 10rem;
  width: 10rem;
`;
