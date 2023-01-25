import React, {useEffect, useState} from 'react';
import './App.css';
import {ethers} from 'ethers';
import {JsonRpcSigner} from "@ethersproject/providers";


function App() {
    const [signer, setSigner] = useState<JsonRpcSigner>();

    useEffect(() => {
        const loadMetaMask = async () => {
            // @ts-ignore
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // @ts-ignore
            const accounts = await provider.send("eth_requestAccounts", []);
            console.log({accounts: accounts})
            const account = accounts[0];
            // @ts-ignore
            const _signer = provider.getSigner(account);
            setSigner(_signer);

            console.log(_signer);
        }

        loadMetaMask().then(() => {
        })
    }, [])


  return (
    <div className="App">
      {/*<SendToken signer={signer} />*/}
    </div>
  );
}

export default App;
