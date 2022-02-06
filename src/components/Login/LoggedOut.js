import React from 'react';

import googleLogin from './images/web2-google-login.png';
import facebookLogin from './images/web2-facebook-login.png';

function LoggedOut({handleLogin, connectWalletAction}) {

    return (        
        <div>

            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img id="login-logo" src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                Meedayu Login
            </a>
            </nav>

            <div id="login-div">
                <button onClick={() => handleLogin('google')} class="btn btn-lg btn-google btn-block login-buttons" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button> 
                
                <button onClick={() => handleLogin('facebook')} class="btn btn-lg btn-facebook btn-block login-buttons" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>

                <button onClick={() => handleLogin('reddit')} class="btn btn-lg btn-reddit btn-block login-buttons" type="submit"><i class="fab fa-reddit mr-2"></i> Sign in with Reddit</button>
                
                <button onClick={() => handleLogin('discord')} class="btn btn-lg btn-secondary btn-block login-buttons" type="submit"><i class="fab fa-discord mr-2"></i> Sign in with Discord</button>
                
                <button onClick={() => handleLogin('twitch')} class="btn btn-lg btn-info btn-block login-buttons" type="submit"><i class="fab fa-twitch mr-2"></i> Sign in with Twitch</button>
                
                <button onClick={() => handleLogin('apple')} class="btn btn-lg btn-light btn-block login-buttons" type="submit"><i class="fab fa-apple mr-2"></i> Sign in with Apple</button>
                
                <button onClick={() => handleLogin('line')} class="btn btn-lg btn-success btn-block login-buttons" type="submit"><i class="fab fa-line mr-2"></i> Sign in with Line</button>
                
                <button onClick={() => handleLogin('github')} class="btn btn-lg btn-github btn-block login-buttons" type="submit"><i class="fab fa-github mr-2"></i> Sign in with Github</button>
                
                <button onClick={() => handleLogin('linkedin')} class="btn btn-lg btn-linkedin btn-block login-buttons" type="submit"><i class="fab fa-linkedin mr-2"></i> Sign in with Linkedin</button>
                
                <button onClick={() => handleLogin('twitter')} class="btn btn-lg btn-twitter btn-block login-buttons" type="submit"><i class="fab fa-twitter mr-2"></i> Sign in with Twitter</button>
                
                <button onClick={connectWalletAction} class="btn btn-lg btn-warning btn-block login-buttons" type="submit"><i class="fab fa-ethereum mr-2"></i> Sign in with MetaMask</button>
                
            </div>
        </div>
    )
}

export default LoggedOut;
