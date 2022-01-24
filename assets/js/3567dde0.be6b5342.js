"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7888],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(83039),p=n(86010),s="tabItem_1uMI";function u(e){var t,n,r,o=e.lazy,i=e.block,u=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,c.lx)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=l(),N=h.tabGroupChoices,w=h.setTabGroupChoices,y=(0,a.useState)(b),C=y[0],A=y[1],j=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=N[d];null!=x&&x!==C&&g.some((function(e){return e.value===x}))&&A(x)}var D=function(e){var t=e.currentTarget,n=j.indexOf(t),r=g[n].value;r!==C&&(E(t),A(r),null!=d&&w(d,r))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},v)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,p.Z)("tabs__item",s,{"tabs__item--active":C===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:T,onFocus:D,onClick:D},null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},42916:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return v}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(55064),l=n(58215),c=["components"],p={title:"CoverImage",sidebar_label:"CoverImage"},s=void 0,u={unversionedId:"components/viewContainer/cover-image",id:"components/viewContainer/cover-image",isDocsHomePage:!1,title:"CoverImage",description:"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u56fe\u7247\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u540ccover-view\uff0c\u652f\u6301\u5d4c\u5957\u5728cover-view\u91cc\u3002",source:"@site/docs/components/viewContainer/cover-image.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/cover-image",permalink:"/taro/docs/next/components/viewContainer/cover-image",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/viewContainer/cover-image.md",tags:[],version:"current",frontMatter:{title:"CoverImage",sidebar_label:"CoverImage"},sidebar:"components",previous:{title:"CoverView",permalink:"/taro/docs/next/components/viewContainer/cover-view"},next:{title:"MatchMedia",permalink:"/taro/docs/next/components/viewContainer/match-media"}},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"CoverImageProps",id:"coverimageprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3}],level:2}],d={toc:m};function v(e){var t=e.components,p=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8986\u76d6\u5728\u539f\u751f\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u56fe\u7247\u89c6\u56fe\u3002\u53ef\u8986\u76d6\u7684\u539f\u751f\u7ec4\u4ef6\u540ccover-view\uff0c\u652f\u6301\u5d4c\u5957\u5728cover-view\u91cc\u3002"),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(94882).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(44090).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<CoverImageProps>\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)(i.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// js\nclass App extends Components {\n  render () {\n    return (\n      <View className='container'>\n      <Video id='myVideo' src='src'>\n        <CoverView className='controls'>\n          <CoverView className='play' onClick='play'>\n            <CoverImage className='img' src='src' />\n          </CoverView>\n        </CoverView>\n      </Video>\n    )\n  }\n}\n// css\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n"))),(0,o.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <view class=\"container\">\n    <video id='myvideo' src='https://ugccsy.qq.com/uwMROfz2r5zBIaQXGdGnC2dfDma3J1MItM3912IN4IRQvkRM/o31507f7lcd.mp4?sdtfrom=v1010&guid=aa18cf106b7fdb7e40f2d20b206f2b4f&vkey=63B0FCCC7FC3ADC342C166D86571AE02772258CD9B515B065DC68DF3919D8C288AE831D570ED5E8FE0FF3E81E170D04FF11F874BFDDACF7AAA2C0CFF2ACB39FB1A94DAD1AB859BDA53E4DD6DBCDC1217CEF789A9AC079924E2BBC599EED7A1FFDD60A727F2EB7E7B6472CE63DD4B683C9199DFC78A6A6C4D9891E05467C4B64E'>\n    </video>\n    <cover-view class='controls'>\n      <cover-view class='play' @tap='play'>\n        <cover-image class='img' src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />\n      </cover-view>\n    </cover-view>\n  </view>\n</template>\n\n<style>\n.container {\n  position: relative;\n}\n.controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 225px;\n  transform: translate(-50%, -50%);\n}\n</style>\n")))),(0,o.kt)("h2",{id:"coverimageprops"},"CoverImageProps"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"src"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u56fe\u6807\u8def\u5f84\uff0c\u652f\u6301\u4e34\u65f6\u8def\u5f84\u3001\u7f51\u7edc\u5730\u5740\u3001\u4e91\u6587\u4ef6ID\u3002\u6682\u4e0d\u652f\u6301base64\u683c\u5f0f\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onLoad"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<any>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u52a0\u8f7d\u6210\u529f\u65f6\u89e6\u53d1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onError"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<any>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u65f6\u89e6\u53d1")))),(0,o.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CoverImageProps.src"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CoverImageProps.onLoad"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CoverImageProps.onError"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}v.isMDXComponent=!0},44090:function(e,t,n){t.Z=n.p+"assets/images/alipay-870045b8b2b5ca9bc1f440b1fce439c2.png"},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-ae5be0f8628571becb8a6f3127998977.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-4d55b8ea270355e8ec2284856cfc71e8.png"},94882:function(e,t,n){t.Z=n.p+"assets/images/swan-02ea590f24bbb4ed187920dfb316ae6c.png"},16710:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAilBMVEUAAAAjpU0jpU0jpU0ipU0jpU0jpU0jpU0jpU0hpEwjpU0ipEwjpU0jpU0ipU0jpU0ipU0jpUwjpUwjpU0jpEwjpk4ipk4jpU0jpk0ipU0jpU0jpU4jpU0jpU0jpU0jpk0jpUwjpU0lqE8jpksfp0sipE0jpU0ipU0jpU0jpU0jpk0jpkwjpk0jpU3vCafdAAAALXRSTlMAf4julY/5ascm0S3Vg29eTzPbm0EpIrat37MX9HbmR7uhCxMIHTlZzajBY+l7EkryAAAH0klEQVR42u3daZOiMBAG4FfuSxQUBfFAHa+d7f//9/aucivjmDQEo7vP96mpHgbSSTodaFKMV5azLZsgqWzPs6skaMqtY63GBZ7EYeq785w+kc9df3qAycL3i02S7Mt7CBMdTk5OihLnZNiT2bgBMQXuBoY4WhG1EllHPFw8CKgDwSrGAx3ShjrTpDUeYzZcU6fWwxn6F1o2dc62QvQrdpekxdIt0J/M8Ugbz8nQj71Fmll79GCUkHbJCLplJfWizKDTbuhRT7zhDtqcIupRdIIebw71zHmDBtkX6t2XDJ0bfaUH+DpCxyx6EAtdChf0MIsQnRlX9EDVGB3x6cF8dGJIDzdEByZkgAlam5MR5mjpTIY4o5U1GWONFsgoYMvJKAmYFmSYBVhcMo4LhhUZaPWEeUlH2cqIDDWCkjEZawwFYUXGqsJn/vBeWzzBvFaO9fQvuuILn30lw33NIOHtCxnvyxvuc6gndjSfDCbzyCZ1Du46UQ8Sazp7wx9v4VR5h/uEO3YR6dasYohCv1ySvGj34CUTexjiltrPO1tYyTzSygnxmf1wSZK8DJ8pSafLEffEW5JUPmwoPG8gY3NuPyzuE9JnsYecekFSkv1DciwH8iYtc66M9HnXMT3N+h/TZ1Aza/OUY490qaGqJgle0fPyzxTqpuzloXBJmqTgSOm+ZdjnJ2sCngnvwzWzSY9gB55dQHfZs/6yxQ24NpzcsV4TD/8fq96c0kE6+qRafkt3rWvGq8WxjPGhzTC4mmbdeGrxUv1L0pAeQ7kcdxtzZ0cN/hKTHvkeHxgsxSc3wAf2Od0V49qA9PDl1zEXzKRrgGsBaeHVEK0Vdjtrj+4JcOVIesyVNoor3jb/sYdRfQXBhW67QLBSG90j0kMcIhzFQSemu6I7Q6iW/eTCU82TE5XcwSU9XOXM9MKZXLjaC06m6onQhjEvCe7MKzVMcFP1hxgq/J530kRY/A/onlxI5hVWNrakhy286nSfkHTZdNcWv1SkRyRsenN2nyOSfYwFaTLnrMiOOCV8hd5ijQlnPSHlTN19vSvwAyF91/VD5V9vkxmB+Jz1TxvfHegPIwIZs6owDtdDpxmBZOLYI2F6/a6bEYgwiFYkwb/OyowIRCzv9UiCe/2dNiIQi7fBML+uiTUikIxXApdfFymbEEgJ8Wek/JWgPD4QO+ZumBcYE5+3sN6ng7ndWSApuxp8jBVxra0CP4VNR4FsIZhKr9dYxBOle2Eq3jKQqOYfw7HgdLI4PeogkKSAYLYkOQ5vepiIGVHrQM4FRAOStGUl8RPxf+DYMpDlYIcPJCSpRNNRpX3VJpDKyloeNGgQdLTb3PAD8dIdPnRYk6wASUe7/w47kKDu4ARLoryEssPHJtxALoziB1EFm7W+LoqYgXi7Tir0bXjdVCsdiBmI300Bsgevm+qxFTeQGW4YkFogNsmL9rih9piBJLjhqLo8W3VS/hxwU5QtPvZGaiqVz+8WN+wu7KTRhYC1jJsoDIh2cSMM3+On8fOOjngFaFqeAYytqs0MMWfVnIkalO1OyqZ2y6mumCjUE1JXYtvqZFPZes4+F/6tImLYyg87R4i+dLD4kHZSAOdIT3W/QDSnVoGIY3u9iojHwoqfvA+oTSDiJ7iw1sS1kv7SiStOfmfrWuvFYOq7C4/4xrJDTy6miRUjEG0KgKRcPkhOTQpEeikvFRdqTAokl95WiMW83aRA5rITY0/Md40KxJXdequENNszKhBfdoofiKd/jApkCuDAOgw/NiuQA76zOZN136hAbPxwMaoaQyA/yr0bVR/T4kxdaFTFEkuIn3KDashYEvklPZtVM8mo6mt16vTEKRFp6J6GUWfJc8IvM85f9139FQlJkwN+Cxi7Ivs1fW69Z2wTsAT4w+WsoViMn9DDVSnyj1Tr9b0QfX20Nkq/IlScIjro6xWJ1B66D6UpSdBfDzVLbTOihMiWHXe0luUe1eZ7yxqiRGGduF6SFoFqXurLbyC7fXbnW+FabMTZSJYYf2kMOK3K0gjzC/75YTenP3KXd36YL2UcA5/glng8+nmiO+69j/O6Fh79w8/YswxZrRLOe/DUZ9LDnvGaVyxMa7hrcduJTMxqdL4M2dVRvlEN9N0WLXdmUDUjXby4TV1RDTU1aeO0a0s1hYop6ZO1bBSWQl5K+litW7dNdpCzm5A+yb59M71Asi9eQBqN8Imyw06FxwvpVDIaTnJ6RxYOaeVl+NSwm26e4dAmvYadNmX9MsggOg6+kG7Rrus2ubn7V8fb2dTNqQcn3OX014OYz/mXWkm/THPv12m3/joN8F/nSoLXuSTiZa7tMPZCGCL/Ca+q+8jQoDWcNiZPfF3dtfmTX1j3x/kFrqz7Yf3/0jqjrq1L8NPTX1x3lZg89dV1Lv7ytJfXrV7iWt2becnTXWA3+n9l86teov0615q/0EXzr3P1P/DmUM+cN+hxiqhH0Qna7IYe9cQb7qBTVlIvygy6jRLSLhmhB3uLNLP26EfmeKSN52ToT+wuSYulG6NfoWVT52wrRP9mwzV1aj2c4TEOaUOdadIaDxQPAupAMIjxcEcrolYi6whDbNwzMZ3dDYwye99WpCjfvs9gosIvbZJkl34Bkx2mvjvP6RP53PWnBzyJYryynG3ZBElle55dJUFTbh1rNS6gxzcXDSGbOpE70AAAAABJRU5ErkJggg=="}}]);