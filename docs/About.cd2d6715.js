var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire8657;e.register("567d0",(function(t,n){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(e("8T3gX")),o=(u(e("7GqSM")),u(e("lnAKI"))),a=e("k4ank");function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}class l extends r.default.Component{constructor(e){super(e)}async componentDidMount(){}render(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"About Page"}),(0,a.jsx)("p",{children:"This is about page"}),(0,a.jsx)(o.default,{name:"Narayan"})]})}}var s=l;t.exports.default=s})),e.register("lnAKI",(function(t,n){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}r.default=e,n&&n.set(e,r);return r}(e("8T3gX")),o=e("k4ank");function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}var u=e=>{const[t,n]=(0,r.useState)(10),[a,u]=(0,r.useState)(20),[i,l]=(0,r.useState)({});return(0,r.useEffect)((()=>(async function(){console.log("Functional Child : Component Did Mount",e.name);const t=await fetch("https://api.github.com/users/narayancheerla"),n=await t.json();console.log(n),l(n)}(),()=>{console.log("Functional Child : Component Will Unmount")})),[]),(0,o.jsxs)("div",{className:"wrapper",children:[(0,o.jsx)("h2",{children:"Profile Functional Component"}),(0,o.jsxs)("h3",{children:["Name : ",i?.name]}),(0,o.jsxs)("h3",{children:["Location : ",i?.location]}),(0,o.jsx)("img",{src:i?.avatar_url}),(0,o.jsxs)("h4",{children:["Count One : ",t]}),(0,o.jsxs)("h4",{children:["Count Two: ",a]}),(0,o.jsx)("button",{onClick:()=>{n(1),u(2)},children:"Update Counts"})]})};t.exports.default=u}));
//# sourceMappingURL=About.cd2d6715.js.map
