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
  GridImageContainer,
  GridImage,
} from "./ProfileElements";
import NavBar from '../NavBar';

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
<<<<<<< HEAD
      <NavBar />
=======
      {console.log("images: ", [images])}
>>>>>>> 13d1a25e84191f40d2fea3d1fb2a4476c7718371
      <ProfileTopContainer>
        <ProfileInnerContainer>
          <ProfileImageContainer></ProfileImageContainer>
          <ProfileInfoContainer>
            <ProfileName>{userName}</ProfileName>
            <ProfileAddress>{userAddress}</ProfileAddress>
            <SubscribeButton onClick={console.log("")}>
              Subscribe
            </SubscribeButton>
          </ProfileInfoContainer>
        </ProfileInnerContainer>
      </ProfileTopContainer>
      <GridImageContainer>
        {images.map((image) => {
          <GridImage src={image.urls.regular} />;
        })}
      </GridImageContainer>
    </>
  );
};

export default Profile;
