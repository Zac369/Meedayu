import React from 'react';

function LoggedOut({handleLogin, connectWalletAction}) {

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Login</h1>
    
            <button onClick={() => handleLogin('google')} className="btn">
                Web2Login Google
            </button>

            <button onClick={() => handleLogin('facebook')} className="btn">
                Web2Login Facebook
            </button>

            <button onClick={() => handleLogin('reddit')} className="btn">
                Web2Login Reddit
            </button>

            <button onClick={() => handleLogin('discord')} className="btn">
                Web2Login Discord
            </button>

            <button onClick={() => handleLogin('twitch')} className="btn">
                Web2Login Twitch
            </button>

            <button onClick={() => handleLogin('apple')} className="btn">
                Web2Login Apple
            </button>

            <button onClick={() => handleLogin('line')} className="btn">
                Web2Login Line
            </button>

            <button onClick={() => handleLogin('github')} className="btn">
                Web2Login Github
            </button>

            <button onClick={() => handleLogin('linkedin')} className="btn">
                Web2Login LinkedIn
            </button>

            <button onClick={() => handleLogin('twitter')} className="btn">
                Web2Login Twitter
            </button>
            
            <button onClick={connectWalletAction} className="btn">
                Web3Login Metamask
            </button>
        </div>
    )
}

export default LoggedOut;
