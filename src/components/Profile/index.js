import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import UserContext from "../../store/user-context";
import Axios from "axios";
import {
  ProfileTopContainer,
  ProfileInnerContainer,
  ProfileImageContainer,
  ProfileImage,
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
  const [subscribeText, setSubscribeText] = useState("subscribe");
  const { account } = useContext(UserContext);


  const handleSubscribe = () => {
    if (subscribeText === "subscribe") {
      setSubscribeText("unsubscribe");
    } else if (subscribeText === "unsubscribe") {
      setSubscribeText("subscribe");
    }
  };
  useEffect(() => {
    Axios.get(
      "https://api.unsplash.com/photos/?client_id=l2U-D_PXXujBJoRiCCMCL2ifi_5ZJcK4AC0WH-A2lKk"
    )
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.error(err));

 
  }, []);

  const getImages = async () => {
    let image = images[0].urls.regular;
    return image;
  }

  return (
    <>
      <ProfileTopContainer>
        <ProfileInnerContainer>
          <ProfileImageContainer>
            
            <ProfileImage src=""/>
          </ProfileImageContainer>
          <ProfileInfoContainer>
            <ProfileName>{userName}</ProfileName>
            <ProfileAddress>{account}</ProfileAddress>
            <SubscribeButton onClick={handleSubscribe}>
              {subscribeText}
            </SubscribeButton>
          </ProfileInfoContainer>
        </ProfileInnerContainer>
      </ProfileTopContainer>
      <MainGridImageContainer>
        <GridImageContainer>
          {images.map((image) => {
            return (
              <Link to="/mediaview" state= {{img: image.urls.regular}}>
                <GridImage key={image.id} src={image.urls.regular} />
              </Link>
              );
          })}
        </GridImageContainer>
      </MainGridImageContainer>
    </>
  );
};

export default Profile;
