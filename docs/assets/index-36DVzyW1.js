import{_ as h,f as g,g as k,r as x,c as v,a as t,h as i,b as w,u as V,i as b,e as y,o as C}from"./index-4WylN5OT.js";const $={class:"container"},B={__name:"index",setup(D){const r=g();k();let n=new Date,u=n.getFullYear(),c=n.getMonth()+1,d=n.getDate();function p(){alert(`
    ${u}年${c}月${d}日
    我的小鱼宝，今天依旧喜欢你！
  `)}let e=x("与小鱼"),s=["乖乖，长长的路我们慢慢地走。","咱俩胶黏胶黏。","期待和你一起去许多地方。","想和你一起吃许多次饭。","要和你一起睡许多次觉。","宝贝，祝你今天通畅！","过好当下，珍惜眼前人，宝贝。","宝贝，我喜欢你，希望你一切都好。","喵~喵喵~黏着你。","宝贝，有隐藏款惊喜哦~","静下心来，好好生活。","宝贝，祝你今天有个好心情！","不羡鸳鸯不羡仙，过好我们的小日子~","看到你出现，我的世界一下子亮堂了起来。","宝贝，你出现的刚刚好，在对的时间遇到对的人，我会珍惜的。","咱俩胶黏，咱俩的心也要胶黏胶黏，劲往一处使。","你不开心我也跟着难受(T＿T)","你不在我身边我好想你~~~宝贝~~~~"];function f(){if(e.value=="20231202")alert("宝贝，还记得这天吗？疯狂且美好。"),alert(`
      宝贝，我要跟你在一起。
      想跟你过稀松平常的每一天，安稳度日，共抵风雨。
    `),r.push({path:"/daily"});else if(e.value=="小鱼")alert("我的小鱼，我想你了~");else if(e.value=="牛牛")alert("我是牛牛，想我了嘛~");else{let l=parseInt(Math.random()*s.length);alert(s[l])}}function m(l){window.open(l)}return(l,a)=>{const _=y("el-input");return C(),v("div",$,[t("p",null,[i(" 忙里偷闲的几行代码 "),t("button",{onClick:p},"click me")]),t("p",null,[i(" 送给小鱼的烟花 "),t("button",{onClick:a[0]||(a[0]=o=>m("http://fqdawang.gitee.io/fireworks/"))}," click me ")]),t("p",null,[w(_,{modelValue:V(e),"onUpdate:modelValue":a[1]||(a[1]=o=>b(e)?e.value=o:e=o),placeholder:"Please input",style:{width:"100px","margin-right":"6px"}},null,8,["modelValue"]),t("button",{onClick:f},"click me")])])}}},R=h(B,[["__scopeId","data-v-e9c4a9b4"]]);export{R as default};