(this.webpackJsonpday22=this.webpackJsonpday22||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(7),s=c.n(a),r=c(3),i=(c(13),c(0)),o=function(e){var t=e.templates,c=e.setMeme;return Object(i.jsx)("div",{className:"templates",children:t.map((function(e){return Object(i.jsx)("div",{className:"template",onClick:function(){c(e)},children:Object(i.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:"image"})},e.id)}))})},u=c(8),m=c(4),j=function(e){var t=e.meme,c=e.setMeme,a=Object(n.useState)({template_id:t.id,username:"dhruvgamer99",password:"dhruvgarg",boxes:[]}),s=Object(r.a)(a,2),o=s[0],j=s[1];return Object(i.jsxs)("div",{className:"meme",children:[Object(i.jsx)("img",{src:t.url,alt:""}),Object(i.jsx)("div",{children:Object(u.a)(Array(t.box_count)).map((function(e,t){return Object(i.jsx)("input",{type:"text",placeholder:"Meme Caption ".concat(t+1),onChange:function(e){var c=o.boxes;c[t]={text:e.target.value},j(Object(m.a)(Object(m.a)({},o),{},{boxes:c}))}},t)}))}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(o.template_id,"&username=").concat(o.username,"&password=").concat(o.password);o.boxes.map((function(t,c){e+="&boxes[".concat(c,"][text]=").concat(t.text)})),fetch(e).then((function(e){return e.json()})).then((function(e){c(Object(m.a)(Object(m.a)({},t),{},{url:e.data.url}))}))},children:"Generate Meme"}),Object(i.jsx)("button",{onClick:function(){c(null)},children:"Choose Template"})]})]})};var l=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),u=Object(r.a)(s,2),m=u[0],l=u[1];return Object(n.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){a(e.data.memes)}))}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Meme Generator"}),null===m?Object(i.jsx)(o,{templates:c,setMeme:l}):Object(i.jsx)(j,{meme:m,setMeme:l})]})};s.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.77d73c00.chunk.js.map