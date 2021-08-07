"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5213],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6324:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i={id:"math",title:"Math"},l=void 0,u={unversionedId:"algorithms/math",id:"algorithms/math",isDocsHomePage:!1,title:"Math",description:"Notes",source:"@site/../contents/algorithms/math.md",sourceDirName:"algorithms",slug:"/algorithms/math",permalink:"/algorithms/math",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/math.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"math",title:"Math"},sidebar:"docs",previous:{title:"Linked List",permalink:"/algorithms/linked-list"},next:{title:"Matrix",permalink:"/algorithms/matrix"}},s=[{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"If code involves division or modulo, remember to check for division or modulo by 0 case."),(0,a.kt)("p",null,'When a question involves "a multiple of a number", perhaps modulo might be useful.'),(0,a.kt)("p",null,"Check for and handle overflow/underflow if you are using a typed language like Java and C++. At the very least, mention that overflow/underflow is possible and ask whether you need to handle it."),(0,a.kt)("p",null,"Consider negative numbers and floating point numbers. This may sound obvious, but under interview pressure, many obvious cases go unnoticed."),(0,a.kt)("p",null,"If the question asks to implement an operator such as power, squareroot or division and want it to be faster than O(n), binary search is usually the approach to go."),(0,a.kt)("h4",{id:"some-common-formulas"},"Some common formulas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sum of 1 to N = (n+1) ","*"," n/2"),(0,a.kt)("li",{parentName:"ul"},"Sum of GP = 2",(0,a.kt)("sup",null,"0")," + 2",(0,a.kt)("sup",null,"1")," + 2",(0,a.kt)("sup",null,"2")," + 2",(0,a.kt)("sup",null,"3")," + ... 2",(0,a.kt)("sup",null,"n")," = 2",(0,a.kt)("sup",null,"n+1")," - 1"),(0,a.kt)("li",{parentName:"ul"},"Permutations of N = N! / (N-K)!"),(0,a.kt)("li",{parentName:"ul"},"Combinations of N = N! / (K! ","*"," (N-K)!)")),(0,a.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/powx-n/"},"Pow(x, n)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/sqrtx/"},"Sqrt(x)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/integer-to-english-words/"},"Integer to English Words"))))}m.isMDXComponent=!0},7462:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}}]);