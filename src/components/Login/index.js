import React, { useEffect, useState, useCallback } from "react";
import OpenLogin from "@toruslabs/openlogin";
import Web3 from "web3";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";



import { POSClient, use } from "@maticnetwork/maticjs"
import { Web3ClientPlugin } from "@maticnetwork/maticjs-web3";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

// install web3 plugin
use(Web3ClientPlugin);

const posConfig = {
  rpc: {
      root: "https://goerli.infura.io/v3/73d0b3b9a4b2499da81c71a2b2a473a9",
      child: process.env.MATIC_RPC || 'https://rpc-mumbai.matic.today'
  },
  pos: {
      parent: {
          erc20: '0x655f2166b0709cd575202630952d71e2bb0d61af',
          erc721: '0x16F7EF3774c59264C46E5063b1111bCFd6e7A72f',
          erc1155: '0x2e3Ef7931F2d0e4a7da3dea950FF3F19269d9063',
      },
      child: {
          erc721: '0xbD88C3A7c0e242156a46Fbdf87141Aa6D0c0c649',
          erc20: '0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1',
          weth: '0x714550C2C1Ea08688607D86ed8EeF4f5E4F22323',
          erc1155: '0xA07e45A987F19E25176c877d98388878622623FA',
      },
  },
}

const polygonConnector = {
  _posClient: null,
  connect: async(_privateKey,from, parentProvider, childProvider) => {
    const posClient = new POSClient();
    await posClient.init({
        network: 'testnet',
        version: 'mumbai',
        parent: {
          provider: parentProvider,
          defaultConfig: {
            from,
          }
        },
        child: {
          provider: childProvider,
          defaultConfig: {
            from,
          }
        }
    });

    polygonConnector._posClient = posClient;
    return { posClient }
  },
  getClient: async(_privateKey,from, parentProvider, childProvider)=> {
    if(polygonConnector._posClient) {
      return { posClient: polygonConnector._posClient }
    } 
    return await polygonConnector.connect(_privateKey,from, parentProvider, childProvider);
  }
}


function LoginLogic() {
  const [loading, setLoading] = useState(false);
  const [openlogin, setSdk] = useState(undefined);
  const [walletInfo, setUserAccountInfo] = useState(null);
  const [level, setChainLevel] = useState("l2"); // "l1" or "l2"

  

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
          const address = accounts[0];
          console.log('Found an authorized account:', address);
          setUserAccountInfo({address});
        } else {
          console.log('No authorized account found');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected', accounts[0]);
      const address = accounts[0];
      setUserAccountInfo({address});
      ctx.loginHandler(address);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const getMaticAccountDetails = useCallback(async(privateKey) =>{
  const parentProvider = (await EthereumPrivateKeyProvider.getProviderInstance({
    privKey: privateKey,
    chainConfig: {
      chainId: "0x5",
      rpcTarget: posConfig.rpc.root
    }
  })).provider

  const childProvider = (await EthereumPrivateKeyProvider.getProviderInstance({
    privKey: privateKey,
    chainConfig: {
      chainId: "0x13881",
      rpcTarget: posConfig.rpc.child
    }
  })).provider

  const web3 = new Web3(parentProvider);

  const [address] = await web3.eth.getAccounts();
  const { posClient } =  await polygonConnector.getClient(privateKey, address, parentProvider, childProvider);
  const tokenAddress = level === "l1" ? posConfig.pos.parent.erc20 : posConfig.pos.child.erc20;

  const erc20Token = posClient.erc20(
      tokenAddress,
      level === "l1"
  )

  const balance = await erc20Token.getBalance(address);

  setUserAccountInfo({balance, address});
  },[]);

  useEffect(() => {
    async function initializeOpenlogin() {
      // you can get your project id/clientId from https://developer.tor.us
      // for localhost you can pass any string as clientId
      const sdkInstance = new OpenLogin({
        clientId: "BGsoBy4VqgTnO1m68UemuRZOnKWeD1DndRiaPS67p51T1Xe87XMJsw0B3H72iVjv5YtNXW-6RmRB2rWqbUgpXic", // your project id
        network: 'testnet',
      });
      
      await sdkInstance.init();
      if (sdkInstance.privKey) {
        console.log(sdkInstance.privKey,"priv key")
        await getMaticAccountDetails(sdkInstance.privKey);
      }
      setSdk(sdkInstance);
      setLoading(false)
    }
    setLoading(true)
    initializeOpenlogin();
  }, []);

  const handleLogin = async (provider) => {
    setLoading(true)
    try {
      const privKey = await openlogin.login({
        loginProvider: provider,
        redirectUrl:  window.location.href,
      });
      await getMaticAccountDetails(privKey);
      setLoading(false)
    } catch (error) {
      console.log("error", error);
      setLoading(false)

    }
    
  }

  const handleLogout = async (fastLogin = false) => {
    setLoading(true)
    await openlogin.logout({
      fastLogin
    });
    walletInfo.address = null;
    setLoading(false)
  };

  
  return (
    <>
    {
    loading ?
    <div id="body-loading">
      <div class="middle">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <div class="bar bar4"></div>
        <div class="bar bar5"></div>
        <div class="bar bar6"></div>
        <div class="bar bar7"></div>
        <div class="bar bar8"></div>
      </div>
    </div> :
      <div>
        {
          (walletInfo?.address) ?
          <div>
            <LoggedIn
              handleLogout={handleLogout}
              loading={loading}
              privKey={openlogin?.privKey}
              walletInfo={walletInfo}
            /> 
          </div>:
          <div className="loginContainer">
            <LoggedOut
              handleLogin={handleLogin}
              connectWalletAction={connectWalletAction}
            />
          </div>
        }

      </div>
    }
    </>
  );
}

export default LoginLogic;
