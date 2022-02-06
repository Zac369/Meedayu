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
        <ProfilePage />
        <button id="logout-btn" class="btn btn-danger" key="1" type="primary" onClick={()=>handleLogout()}>
            Logout 
        </button>
    </div>
 )
}

export default LoggedIn;