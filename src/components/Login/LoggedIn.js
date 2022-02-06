import React, { useState, useContext, useEffect } from "react";
import UserContext from '../../store/user-context';
import { ProfilePage } from '../../pages';

function LoggedIn({handleLogout, walletInfo}) {
    const {account, setAccount} = useContext(UserContext);


    useEffect(() => {
        setAccount(walletInfo.address);


        }, []);
    

 return (

    <div>
        <button key="1" type="primary" onClick={()=>handleLogout()}>
            Logout 
        </button>
        <ProfilePage />
  </div>
 )
}

export default LoggedIn;