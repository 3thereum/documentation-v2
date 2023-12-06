"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1643],{7761:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(5893),n=t(1151);const o={title:"Understanding Drift Protocol",slug:"OReT-understanding-drift-protocol",createdAt:"Wed Jul 20 2022 07:13:35 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Aug 10 2023 13:42:39 GMT+0000 (Coordinated Universal Time)"},s="Drift Protocol",a={id:"Drift Protocol v2 Docs/Understanding Drift Protocol",title:"Understanding Drift Protocol",description:"At the application level, Drift Protocol is a decentralized exchange that supports low slippage, low fees, and minimal price impact on all trades. Drift offers four primary products:",source:"@site/docs/Drift Protocol v2 Docs/Understanding Drift Protocol.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/OReT-understanding-drift-protocol",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/OReT-understanding-drift-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/drift-labs/documentation-v2/blob/master/docs/Drift Protocol v2 Docs/Understanding Drift Protocol.md",tags:[],version:"current",frontMatter:{title:"Understanding Drift Protocol",slug:"OReT-understanding-drift-protocol",createdAt:"Wed Jul 20 2022 07:13:35 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Aug 10 2023 13:42:39 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Trading Fees",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/3F0d-trading-fees"},next:{title:"Versioned Transactions",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/8ECZ-versioned-t"}},d={},l=[{value:"Just-in-Time Liquidity",id:"just-in-time-liquidity",level:3},{value:"Constant Liquidity",id:"constant-liquidity",level:3},{value:"Limit Orderbook Liquidity",id:"limit-orderbook-liquidity",level:3},{value:"Decentralisation",id:"decentralisation",level:3}];function c(e){const i={a:"a",em:"em",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"drift-protocol",children:"Drift Protocol"}),"\n",(0,r.jsxs)(i.p,{children:["At the application level, Drift Protocol is a decentralized exchange that supports low slippage, low fees, and minimal price impact on all trades. Drift offers ",(0,r.jsx)(i.strong,{children:"four"})," primary products:"]}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Spot Trading - ",(0,r.jsx)(i.a,{href:"/documentation-v2/docs/User%20Setup/aNrx-what-is-spot-margin-trading",children:"What is Spot Margin Trading?"})," "]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Perpetuals Trading - ",(0,r.jsx)(i.a,{href:"/documentation-v2/docs/User%20Setup/y2KL-what-are-perpetual-futures",children:"What are Perpetual Futures?"})," "]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Borrow & Lend - ",(0,r.jsx)(i.a,{href:"/documentation-v2/docs/User%20Setup/DFvu-what-is-borrow-and-lend",children:"What is Borrow & Lend?"})," "]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Passive Liquidity Provision - ",(0,r.jsx)(i.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/lhW0-liquidity-provision",children:"DLP - Drift Liquidity Provider"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h1,{id:"the-problem",children:"The Problem"}),"\n",(0,r.jsx)(i.p,{children:"On-chain exchanges suffer from limitations associated with blockchains\u2014namely, speed and limited computational capacity on-chain. "}),"\n",(0,r.jsx)(i.p,{children:"Porting over existing off-chain centralised exchange infrastructure onto the blockchain results in an inefficient use of blockchains and disincentivises market-maker participation with unfavourable conditions. "}),"\n",(0,r.jsx)(i.p,{children:"As a result, most on-chain orderbooks suffer from: "}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"slow fills; "}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"high spreads; and "}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"low liquidity."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h1,{id:"our-solution",children:"Our Solution"}),"\n",(0,r.jsx)(i.p,{children:"Drift has designed & developed an exchange that is robust, computationally efficient, and incentivises market maker participation, as well as liquidity provision. "}),"\n",(0,r.jsx)(i.p,{children:"Trades on Drift are supported by three liquidity mechanisms:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Just-in-Time (JIT) Auction Liquidity"}),": provided by market makers prior to each transaction;"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Limit Orderbook Liquidity"}),": provided by our decentralised orderbook (DLOB) made up of limit orders placed by takers that can be filled by makers; and"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"AMM Liquidity:"})," provided by Drift's AMM ",(0,r.jsx)(i.strong,{children:"* *"}),"if no makers step in to provide liquidity."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"just-in-time-liquidity",children:"Just-in-Time Liquidity"}),"\n",(0,r.jsxs)(i.p,{children:["_For a more technical breakdown, check out: _",(0,r.jsx)(i.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/orqd-just-in-time-jit-auctions#mFAd-",children:"Just-In-Time (JIT) Auctions"})]}),"\n",(0,r.jsxs)(i.p,{children:["All market trades (spot and perpetual) that are placed on Drift are routed through a short-term auction (default is ~ 5 seconds). During this period, market-makers can bid to fill the order at or better than the auction price, providing '",(0,r.jsx)(i.em,{children:"Just-in-Time Liquidity"}),"' as the fulfilment is provided for the market order submitted. "]}),"\n",(0,r.jsx)(i.p,{children:"Auctions are run via a Dutch Auction (where the auction price starts at the better price and linearly moves toward a set worse end price) and market makers compete amongst themselves in speed to fulfil user orders. "}),"\n",(0,r.jsx)(i.h3,{id:"constant-liquidity",children:"Constant Liquidity"}),"\n",(0,r.jsx)(i.p,{children:"_For a more technical breakdown, check out: _"}),"\n",(0,r.jsx)(i.p,{children:"Drift's virtual AMM (DAMM) is the backstop designated liquidity provider for trades on the exchange if 1) market orders aren't filled by the JIT and 2) resting orders hit a trigger price that can be filled by the AMM."}),"\n",(0,r.jsx)(i.p,{children:"The AMM provides a source of constant liquidity for all traders to *take *from. The AMM is considered constant as liquidity is available based on a constant product formula (x*y=k) balancing the reserves. Drift's AMM features an inbuilt bid-ask spread that adjusts based on inventory held by the AMM. Users can also LP into the AMM to further collateralize."}),"\n",(0,r.jsx)(i.p,{children:"This also means that, even without external makers, Drift Protocol can support new markets without dependence on external market makers to bootstrap liquidity (albeit with additional risks on the immediate availability of unsettled PnL). Many prudent measures in the protocol's design are in place (capped exposure, effective market making, revenue pool utilization, insurance fund rules, etc) to mitigate and isolate the risks of a single market. The AMM needs a reliable oracle of the perpetual market's spot reference asset. For instance, Drift's SOL-PERP market would refer to a SOL/USD spot oracle for a spot reference. Drift currently uses Pyth for its oracles and can arbitrarily support other sources per market."}),"\n",(0,r.jsx)(i.h3,{id:"limit-orderbook-liquidity",children:"Limit Orderbook Liquidity"}),"\n",(0,r.jsxs)(i.p,{children:["_For a more technical breakdown, check out: _",(0,r.jsx)(i.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/IvA9-decentralised-orderbook-faq",children:"Decentralised Orderbook FAQ"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"Drift's decentralised orderbook (DLOB) acts as its third source of liquidity. "}),"\n",(0,r.jsxs)(i.p,{children:["Limit orders are orders that trigger and execute on a particular condition. For a full breakdown of what limit orders are, visit: ",(0,r.jsx)(i.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/EUrr-order-types",children:"Order Types"}),". "]}),"\n",(0,r.jsxs)(i.p,{children:["Limit orders are placed by users on-chain. A network of Keeper Bots (",(0,r.jsx)(i.a,{href:"/documentation-v2/docs/Guides/hfCI-keeper-bots",children:"Keeper Bots"}),") then sorts the on-chain limit orders into an off-chain orderbook and categorises limit orders from oldest to newest, and largest to smallest. "]}),"\n",(0,r.jsx)(i.p,{children:"Each Keeper maintains its own view of the orderbook (hence the 'decentralised' aspect) and tracks new orders, AMM availability, and the oracle price. If the trigger condition of a limit order is met, the Keeper will submit the limit order and fill it against the AMM. Keepers will also match taker orders with resting limit orders if the conditions are the same."}),"\n",(0,r.jsx)(i.p,{children:"Keepers are also incentivised to fill the oldest and largest order first. For their work, they are paid a portion of the taker fee to their Drift User Account. "}),"\n",(0,r.jsx)(i.p,{children:"The decentralised orderbook acts as a source of 'resting' liquidity as it rests on the orderbook until either a taker takes it, or the requisite market conditions are met and it's filled against the DAMM. "}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h1,{id:"more-about-drift",children:"More about Drift"}),"\n",(0,r.jsx)(i.h3,{id:"decentralisation",children:"Decentralisation"}),"\n",(0,r.jsxs)(i.p,{children:["Drift Protocol is a ",(0,r.jsx)(i.strong,{children:"decentralised"})," exchange, meaning: "]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"all deposits, withdraws, and trades are executed on-chain and are completely transparent; "}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"trading requires a connection to a self-custodial Solana wallet; and"}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"execution of all trades is facilitated by smart contract technology with no human or third-party input to execute or fill trades. "}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Decentralisation offers many benefits, including: "}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"anonymity; "}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"transparency; "}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"fairness; and"}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"trustlessness. "}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"However, decentralisation also means that Drift is susceptible to the same limitations and shortcomings that arise from running on a blockchain, including:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"underlying blockchain risk;"}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"transaction fees; "}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"smart contract risk; and"}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"network congestion. "}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>s});var r=t(7294);const n={},o=r.createContext(n);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);