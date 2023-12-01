"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1405],{1696:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var i=r(5893),o=r(1151);const n={title:"Tutorial- Bots",slug:"gss4-tutorial-bots",createdAt:"Mon Feb 21 2022 08:09:26 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Apr 13 2023 03:00:39 GMT+0000 (Coordinated Universal Time)"},s=void 0,l={id:"Drift Protocol v2 Docs/Tutorial_ Bots",title:"Tutorial- Bots",description:"Introduction",source:"@site/docs/Drift Protocol v2 Docs/Tutorial_ Bots.md",sourceDirName:"Drift Protocol v2 Docs",slug:"/Drift Protocol v2 Docs/gss4-tutorial-bots",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/gss4-tutorial-bots",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Drift Protocol v2 Docs/Tutorial_ Bots.md",tags:[],version:"current",frontMatter:{title:"Tutorial- Bots",slug:"gss4-tutorial-bots",createdAt:"Mon Feb 21 2022 08:09:26 GMT+0000 (Coordinated Universal Time)",updatedAt:"Thu Apr 13 2023 03:00:39 GMT+0000 (Coordinated Universal Time)"},sidebar:"tutorialSidebar",previous:{title:"Tutorial- Arbitrage Bot",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/swMI-tutorial-arbitrage-bot"},next:{title:"Tutorial- JIT Maker Bot",permalink:"/documentation-v2/docs/Drift Protocol v2 Docs/isEC-tutorial-jit-maker-bot"}},d={},a=[{value:"Introduction",id:"introduction",level:3},{value:"Keeper Bots",id:"keeper-bots",level:3},{value:"Trading Bots",id:"trading-bots",level:3}];function c(t){const e={a:"a",h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(e.p,{children:"There are two primary types of bots that run on Drift Protocol:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Keeper Bots; and "}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Trading Bots. "}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["The reference implementation for all Keeper bots mentioned in these docs is available ",(0,i.jsx)(e.a,{href:"https://github.com/drift-labs/keeper-bots-v2",children:"here"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"All bots require some amount of SOL to pay transaction fees. "}),"\n",(0,i.jsx)(e.h3,{id:"keeper-bots",children:"Keeper Bots"}),"\n",(0,i.jsx)(e.p,{children:"Keeper Bots are integral to the performance of Drift Protocol. They perform automated actions as autonomous off-chain agents that are crucial to the platform. "}),"\n",(0,i.jsx)(e.p,{children:"Keepers are rewarded depending on the duties that they perform."}),"\n",(0,i.jsx)(e.p,{children:"The various types of keeper bots are:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Bot Type"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Difficulty"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Capital Required"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Rewards"}),(0,i.jsx)(e.th,{children:"Link"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Matching Bot"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Basic"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"No"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TBD"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/6Apm-tutorial-order-matching-bot",children:"Tutorial: Order Matching Bot"})," "]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Order Trigger"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Basic"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"No"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TBD"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/I-as-tutorial-order-trigger-bot",children:"Tutorial: Order Trigger Bot"})," "]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Liquidator"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Advanced"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TBD"}),(0,i.jsx)(e.td,{children:" "})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"trading-bots",children:"Trading Bots"}),"\n",(0,i.jsx)(e.p,{children:"Trading Bots are for-profit bots run on Drift Protocol for the purposes of automating particular trading strategies. In addition to the financial incentive, Trading Bots provide other users on the exchange with better, more accurate pricing and better liquidity. "}),"\n",(0,i.jsx)(e.p,{children:"There are two primary types of trading bots that can be run on Drift Protocol. We have provided examples here:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Bot Type"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Difficulty"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Capital Required"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Rewards"}),(0,i.jsx)(e.th,{children:"Link"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Arbitrage Bot"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Advanced"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TBD"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/swMI-tutorial-arbitrage-bot",children:"Tutorial: Arbitrage Bot"})," "]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"JIT Maker Bot"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Advanced"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Yes"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TBD"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"/documentation-v2/docs/Drift%20Protocol%20v2%20Docs/isEC-tutorial-jit-maker-bot",children:"Tutorial: JIT Maker Bot"})})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},1151:(t,e,r)=>{r.d(e,{Z:()=>l,a:()=>s});var i=r(7294);const o={},n=i.createContext(o);function s(t){const e=i.useContext(n);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),i.createElement(n.Provider,{value:e},t.children)}}}]);