"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7607],{1935:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(5893),r=o(1151);const s={title:"Accounting and Settlement",slug:"bBlz-accounting-and-settlement",createdAt:"Sun Aug 28 2022 13:20:36 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 21 2023 11:38:02 GMT+0000 (Coordinated Universal Time)"},i=void 0,l={id:"Drift Protocol v2 Docs/Accounting and Settlement",title:"Accounting and Settlement",description:"Within Drift Protocol, all token deposits are held in a global collateral vault. This is required for seamless cross-margin and borrow-lend. The only exception to this is the insurance fund vault residing outside.",source:"@site/docs/Drift Protocol v2 Docs/Accounting and Settlement.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/bBlz-accounting-and-settlement",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/bBlz-accounting-and-settlement",draft:!1,unlisted:!1,editUrl:"https://github.com/drift-labs/documentation-v2/blob/master/docs/Drift Protocol v2 Docs/Accounting and Settlement.md",tags:[],version:"current",frontMatter:{title:"Accounting and Settlement",slug:"bBlz-accounting-and-settlement",createdAt:"Sun Aug 28 2022 13:20:36 GMT+0000 (Coordinated Universal Time)",updatedAt:"Tue Feb 21 2023 11:38:02 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Welcome to Drift Protocol",permalink:"/documentation-v2/docs/D77R-welcome-to-drift-protocol"},next:{title:"Advanced Orders FAQ",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/p4qc-advanced-orders-faq"}},a={},c=[{value:"Perpetual Market",id:"perpetual-market",level:3},{value:"Spot Market",id:"spot-market",level:3},{value:"Future Work",id:"future-work",level:3}];function d(e){const t={a:"a",code:"code",div:"div",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Within Drift Protocol, all token deposits are held in a global collateral vault. This is required for seamless cross-margin and borrow-lend. The only exception to this is the insurance fund vault residing outside."}),"\n",(0,n.jsx)(t.p,{children:"Ensuring proper accounting across users requires a robust settlement mechanism. The protocol uses intermediate Pool Balances to facilitate transfers and ensure that claimed gains are required to come from settled offsetting losses."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"High Level Architecture",src:o(1731).Z+"",width:"1180",height:"683"})}),"\n",(0,n.jsx)(t.h3,{id:"perpetual-market",children:"Perpetual Market"}),"\n",(0,n.jsx)(t.p,{children:"An individual perpetual market has two pools:"}),"\n",(0,n.jsx)(t.p,{children:"  A. P&L Pool: to accumulate funds from users with losses for settlement to users with profits\nB. Fee Pool: to accumulate a fraction of exchange fees for the Quote Spot Market's Revenue Pool"}),"\n",(0,n.jsxs)(t.p,{children:["The P&L Pool receives the highest priority on claimed funds, in order to give user's the best possible experience. The default fraction of exchange fees for the Fee Pool is ",(0,n.jsx)(t.code,{children:"total_exchange_fee / 2"})," and this fraction is determined by: ",(0,n.jsx)(t.code,{children:"SHARE_OF_FEES_ALLOCATED_TO_CLEARING_HOUSE"}),"."]}),"\n",(0,n.jsx)(t.div,{children:(0,n.jsx)(t.p,{children:"The Fee Pool will only get partially filled up by up to 1% of intermediate P&L settled from a user's losses and aggressively drawn down for the benefit of the P&L Pool otherwise."})}),"\n",(0,n.jsx)(t.h3,{id:"spot-market",children:"Spot Market"}),"\n",(0,n.jsx)(t.p,{children:"An individual spot market has two pools:"}),"\n",(0,n.jsx)(t.p,{children:"  A. Revenue Pool: to accumulate revenue across the protocol, denominated in this token\nB. Fee Pool: to pay fillers and settle portions to the revenue pool"}),"\n",(0,n.jsx)(t.p,{children:"The Revenue Pool can collect fees from:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Borrow interest"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Liquidations"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Perpetual Markets"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"and can pay out to"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Insurance Fund Stakers"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Perpetual Markets"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["(see details of these rules in ",(0,n.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/diSR-revenue-pool",children:"Revenue Pool"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:["The Fee Pool collects exchange fees from swaps and uses them to pay out the Keeper Network ",(0,n.jsx)(t.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/lVe4-keepers-and-decentralised-orderbook",children:"Keepers & Decentralised Orderbook"})]}),"\n",(0,n.jsx)(t.h3,{id:"future-work",children:"Future Work"}),"\n",(0,n.jsx)(t.p,{children:"Currently, a Perpetuals Market can only pull from the Spot Market Revenue Pool and Insurance Fund for its quote currency."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"In the future, it may be possible for a distressed associative perp market (BTC-PERP) to be able to pull funds from the associated spot market (BTC) revenue/insurance pool and immediately swap for USDC to top off its fee/P&L pool. "}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1731:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/7o9CDj7ho4pmKHiTI8_aD_img9824-6fe052e3eef7d7f69567dea7173cf222.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>i});var n=o(7294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);