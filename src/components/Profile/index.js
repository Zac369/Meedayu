import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ProfileTopContainer,
  ProfileInnerContainer,
  ProfileImageContainer,
  ProfileInfoContainer,
  ProfileName,
  ProfileAddress,
  SubscribeButton,
  ImageContainer,
} from "./ProfileElements";

const Profile = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    
  }, []);
  return (
    <>
      <ProfileTopContainer>
        <ProfileInnerContainer>
          <ProfileImageContainer></ProfileImageContainer>
          <ProfileInfoContainer>
            <ProfileName>Gourav Kumar</ProfileName>
            <ProfileAddress>0x3...7c</ProfileAddress>
            <SubscribeButton onClick={console.log("clicked")}>
              {" "}
              Subscribe
            </SubscribeButton>
          </ProfileInfoContainer>
        </ProfileInnerContainer>
      </ProfileTopContainer>
      <ImageContainer></ImageContainer>
    </>
  );
};

export default Profile;
