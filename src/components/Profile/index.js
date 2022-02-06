import React, { useEffect, useState, useContext } from "react";
import UserContext from "../../store/user-context";
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
import NavBar from "../NavBar";

const userName = "John Doe";

const Profile = () => {
  const [images, setImages] = useState([]);
  const {account} = useContext(UserContext);

  let userAddress;

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

            <ProfileAddress>{account}</ProfileAddress>
            <SubscribeButton onClick={console.log("")} />

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
