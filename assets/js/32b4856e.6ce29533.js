"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5094],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8801:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a={id:"recursion",title:"Recursion"},s=void 0,c={unversionedId:"algorithms/recursion",id:"algorithms/recursion",isDocsHomePage:!1,title:"Recursion",description:"Notes",source:"@site/../contents/algorithms/recursion.md",sourceDirName:"algorithms",slug:"/algorithms/recursion",permalink:"/algorithms/recursion",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/recursion.md",version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"recursion",title:"Recursion"},sidebar:"docs",previous:{title:"Queue",permalink:"/algorithms/queue"},next:{title:"Sorting and Searching",permalink:"/algorithms/sorting-searching"}},u=[{value:"Notes",id:"notes",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],l={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Recursion is useful for permutation, because it generates all combinations and tree-based questions. You should know how to generate all permutations of a sequence as well as how to handle duplicates."),(0,i.kt)("p",null,"Remember to always define a base case so that your recursion will end."),(0,i.kt)("p",null,"Recursion implicitly uses a stack. Hence all recursive approaches can be rewritten iteratively using a stack. Beware of cases where the recursion level goes too deep and causes a stack overflow (the default limit in Python is 1000). You may get bonus points for pointing this out to the interviewer. Recursion will never be O(1) space complexity because a stack is involved, unless there is ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/310974/what-is-tail-call-optimization"},"tail-call optimization")," (TCO). Find out if your chosen language supports TCO."),(0,i.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/subsets/"},"Subsets")," and ",(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/subsets-ii/"},"Subsets II")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/strobogrammatic-number-ii/"},"Strobogrammatic Number II (LeetCode Premium)"))))}p.isMDXComponent=!0},7462:function(e,t,r){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},3366:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})}}]);