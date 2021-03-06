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

const userDummyData = {
    id: '0',
    username: "John Doe",
    address: "",
    photo: 'https://i.pinimg.com/originals/23/4a/21/234a218c200ea9a5fc85bc9363cf2f2e.jpg'
  }

const Profile = () => {
  const [images, setImages] = useState([]);
  const [subscribeText, setSubscribeText] = useState("Subscribe");
  const { account } = useContext(UserContext);


  const handleSubscribe = () => {
    if (subscribeText === "Subscribe") {
      setSubscribeText("Unsubscribe");
    } else if (subscribeText === "Unsubscribe") {
      setSubscribeText("Subscribe");
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
    // <>
    //   <ProfileTopContainer>
    //     <ProfileInnerContainer>
    //       <ProfileImageContainer>
    //         {/* Add profile image in below element */}
    //         {/* <ProfileImage src={}/> */}
    //       </ProfileImageContainer>
    //       <ProfileInfoContainer>
    //         <ProfileName>{userName}</ProfileName>
    //         <ProfileAddress>{account}</ProfileAddress>
    //         <SubscribeButton onClick={handleSubscribe}>
    //           {subscribeText}
    //         </SubscribeButton>
    //       </ProfileInfoContainer>
    //     </ProfileInnerContainer>
    //   </ProfileTopContainer>
    //   <MainGridImageContainer>
    //     <GridImageContainer>
    //       {images.map((image) => {
    //         return <GridImage key={image.id} src={image.urls.regular} />;
    //       })}
    //     </GridImageContainer>
    //   </MainGridImageContainer>
    // </>
      <div>
        
        <NavBar user={userDummyData}/>
        <div  id="profileGen">
        <h1 id="name"><b>{userDummyData.userName}</b></h1>
          <div id="add-subs">
          <p id="address"><i>Your address is:</i> <b>{account}</b></p>
            <button class="btn" id="subscribe" onClick={handleSubscribe}>{subscribeText}</button>
          </div>

          <div id="image-container">
            {/* {images.map((image) => {
                return <img class="profile-images" key={image.id} src={image.urls.regular} alt="img"></img> ;
              })} */}

            {images.map((image) => {
                return (
                  <Link to="/mediaview" state= {{img: image.urls.regular}}>
                    <img class="profile-images" key={image.id} src={image.urls.regular} alt="img"/>
                  </Link>
                  );
              })}

          </div>
        </div>
      </div>
  );
};

export default Profile;
