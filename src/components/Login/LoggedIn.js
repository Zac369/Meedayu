import React, { useState } from "react";

function LoggedIn({handleLogout, walletInfo}) {
 return (
    <div>
        <button key="1" type="primary" onClick={()=>handleLogout()}>
            Logout 
        </button>
        <div className="container">
            <div>
                Wallet address: <i>{walletInfo?.address}</i>
            </div>
        </div>
  </div>
 )
}

export default LoggedIn;