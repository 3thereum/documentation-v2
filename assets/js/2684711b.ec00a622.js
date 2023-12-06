"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[582],{7539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=n(5893),r=n(1151);const s={title:"Keeper Bots",slug:"hfCI-keeper-bots",createdAt:"Mon Feb 21 2022 08:09:26 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri Mar 03 2023 20:39:15 GMT+0000 (Coordinated Universal Time)"},o="Introduction",d={id:"Guides/Keeper Bots",title:"Keeper Bots",description:"Keeper Bots in the Drift Protocol keep the protocol operational by performing automated actions as autonomous off-chain agents. Keepers are rewarded depending on the duties that they perform.",source:"@site/docs/Guides/Keeper Bots.md",sourceDirName:"Guides",slug:"/Guides/hfCI-keeper-bots",permalink:"/documentation-v2/docs/Guides/hfCI-keeper-bots",draft:!1,unlisted:!1,editUrl:"https://github.com/drift-labs/documentation-v2/blob/master/docs/Guides/Keeper Bots.md",tags:[],version:"current",frontMatter:{title:"Keeper Bots",slug:"hfCI-keeper-bots",createdAt:"Mon Feb 21 2022 08:09:26 GMT+0000 (Coordinated Universal Time)",updatedAt:"Fri Mar 03 2023 20:39:15 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Historical Data (v1)",permalink:"/documentation-v2/docs/Guides/l-vM-historical-data-v1"},next:{title:"SDK Documentation",permalink:"/documentation-v2/docs/Guides/Qt1a-sdk-documentation"}},l={},a=[{value:"Required Environment Variables",id:"required-environment-variables",level:3}];function c(e){const t={a:"a",code:"code",div:"div",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Keeper Bots in the Drift Protocol keep the protocol operational by performing automated actions as autonomous off-chain agents. Keepers are rewarded depending on the duties that they perform."}),"\n",(0,i.jsx)(t.p,{children:"The various types of keeper bots are:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Bot Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Difficulty"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Capital Required"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Rewards"}),(0,i.jsx)(t.th,{children:"Link"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Matching Bot"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Basic"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TBD"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"/documentation-v2/docs/Guides/6Apm-tutorial-order-matching-bot",children:"Tutorial: Order Matching Bot"})," "]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Order Trigger"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Basic"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TBD"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"/documentation-v2/docs/Guides/I-as-tutorial-order-trigger-bot",children:"Tutorial: Order Trigger Bot"})," "]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Liquidator"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TBD"}),(0,i.jsxs)(t.td,{children:["****",(0,i.jsx)(t.a,{href:"/documentation-v2/docs/Guides/IsAx-tutorial-liquidation-bot",children:"Tutorial: Liquidation Bot"})," "]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"_Note: all bots require some amount of SOL for user account rent and to pay transaction fees. _"}),"\n",(0,i.jsxs)(t.p,{children:["The reference implementation for all Keeper bots mentioned in these docs is available ",(0,i.jsx)(t.a,{href:"https://github.com/drift-labs/keeper-bots-v2",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"preparing-environment",children:"Preparing Environment"}),"\n",(0,i.jsx)(t.p,{children:"First clone the keeper-bots-v2 repo (make sure to check out the correct branch for the cluster you are targetting)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Branch Name"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Cluster"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"master"}),(0,i.jsx)(t.td,{children:"devnet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"devnet"}),(0,i.jsx)(t.td,{children:"devnet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mainnet-beta"}),(0,i.jsx)(t.td,{children:"mainnet-beta"})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/drift-labs/keeper-bots-v2 -b devnet\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Prepare the required environment variables by copying over ",(0,i.jsx)(t.code,{children:".env.example"}),", modify ",(0,i.jsx)(t.code,{children:".env"})," with your preferred values"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cp .env.example .env\n"})}),"\n",(0,i.jsx)(t.h3,{id:"required-environment-variables",children:"Required Environment Variables"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"KEEPER_PRIVATE_KEY"}),": the private key of the account to use for signing transactions. This account is the signing of authority of all accounts used by this bot. The value can be a number array (as in the example) or a path to a ",(0,i.jsx)(t.code,{children:"keypair.json "}),"file as generated by ",(0,i.jsx)(t.code,{children:"solana-keygen"}),"\n",(0,i.jsx)(t.code,{children:"ENDPOINT:"})," the JSON-RPC endpoint to use\n",(0,i.jsx)(t.code,{children:"ENV"}),": devnet"]}),"\n",(0,i.jsxs)(t.h1,{id:"initialise-user",children:["Initialise ",(0,i.jsx)(t.code,{children:"User"})]}),"\n",(0,i.jsxs)(t.p,{children:["The signing account needs to have a ",(0,i.jsx)(t.code,{children:"User"})," account before they are able to interact with the ",(0,i.jsx)(t.code,{children:"DriftClient"})," program. We've included a ",(0,i.jsx)(t.code,{children:"--init-user"})," flag on the Keeper Bot script to help with initializing new users."]}),"\n",(0,i.jsxs)(t.div,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"yarn run start --init-user\n"})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"if (!(await driftClient.getUser().exists())) {\n    logger.info(`Creating DriftClient for ${wallet.publicKey}`);\n    const [txSig] = await driftClient.initializeUserAccount();\n    logger.info(`Initialized user account in transaction: ${txSig}`);\n}\n"})})]}),"\n",(0,i.jsx)(t.h1,{id:"depositing-collateral",children:"Depositing Collateral"}),"\n",(0,i.jsx)(t.p,{children:"\u2757Only required if you are trading or your bot needs to maintain open positions (JIT makers and certain liquidators)"}),"\n",(0,i.jsxs)(t.p,{children:["Trading, as well as some Keeper functions (Liquidators and JIT makers), require the account to maintain open positions, and so those accounts must hold collateral. The Keeper Bot script includes a ",(0,i.jsx)(t.code,{children:"--force-deposit"})," flag to help with depositing collateral."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# deposit 10,000 USDC from account\nyarn run start --force-deposit 10000\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var i=n(7294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);