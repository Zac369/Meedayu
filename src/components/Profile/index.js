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
  MainGridImageContainer,
  GridImageContainer,
  GridImage,
} from "./ProfileElements";

const userName = "John Doe";
const userAddress = "0xE...8c";
const Profile = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://api.unsplash.com/photos/?client_id=l2U-D_PXXujBJoRiCCMCL2ifi_5ZJcK4AC0WH-A2lKk"
    )
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <ProfileTopContainer>
        <ProfileInnerContainer>
          <ProfileImageContainer></ProfileImageContainer>
          <ProfileInfoContainer>
            <ProfileName>{userName}</ProfileName>
            <ProfileAddress>{userAddress}</ProfileAddress>
            <SubscribeButton onClick={console.log("clicked")}>
              Subscribe
            </SubscribeButton>
          </ProfileInfoContainer>
        </ProfileInnerContainer>
      </ProfileTopContainer>
      <MainGridImageContainer>
        <GridImageContainer>
          {images.map((image) => {
            return <GridImage key={image.id} src={image.urls.regular} />;
          })}
        </GridImageContainer>
      </MainGridImageContainer>
    </>
  );
};

export default Profile;
