import React, { useEffect, useState } from "react";
import Axios from "axios";
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
  useEffect(async () => {
    const res = await Axios.get(
      "https://api.unsplash.com/photos/?client_id=l2U-D_PXXujBJoRiCCMCL2ifi_5ZJcK4AC0WH-A2lKk"
    );
      const data = res.data
    // setting images
    setImages(data);
  }, [images]);
  return (
    <>
      <ProfileTopContainer>
        <ProfileInnerContainer>
          <ProfileImageContainer></ProfileImageContainer>
          <ProfileInfoContainer>
            <ProfileName>John Doe</ProfileName>
            <ProfileAddress>0x3...7c</ProfileAddress>
            <SubscribeButton onClick={console.log("clicked")}>
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
