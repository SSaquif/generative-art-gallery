(this["webpackJsonpreact-canvas-gen-art"]=this["webpackJsonpreact-canvas-gen-art"]||[]).push([[0],{17:function(n,t,e){n.exports=e(27)},27:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),a=e(12),o=e.n(a),c=e(2),l=e(1),u=e(13),s=e.n(u),f=e(3);function d(){var n=Object(c.a)(["\n  border: 3px solid white;\n"]);return d=function(){return n},n}var h={dimensions:[2048,2048]},b=f.b.canvas(d()),p=function(n){var t=n.sketch,e=Object(r.useRef)();return Object(r.useEffect)((function(){h.canvas=e.current,s()(t,h)}),[e,t]),i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{ref:e}))},v=function(n){var t=function(){for(var n=[],t=0;t<5;t++){var e=t/5,r=t/5;n.push([e,r])}return n}();return function(n){var e=n.context,r=n.width,i=n.height;e.fillStyle="#544813",e.fillRect(0,0,r,i),t.forEach((function(n){var t=Object(l.a)(n,2),a=t[0],o=t[1],c=a*r,u=o*i;e.beginPath(),e.arc(c,u,r/5,0,2*Math.PI,!1),e.strokeStyle="red",e.lineWidth=40,e.stroke(),e.beginPath(),e.arc(1.5*c,u,r/5,0,2*Math.PI,!1),e.strokeStyle="crimson",e.lineWidth=40,e.stroke(),e.beginPath(),e.arc(.5*c,u,r/5,0,2*Math.PI,!1),e.strokeStyle="orange",e.lineWidth=40,e.stroke()}))}},g=function(){var n=function(){for(var n=[],t=0;t<10;t++)for(var e=0;e<10;e++){var r=t/9,i=e/9;n.push([r,i])}return n}();return function(t){var e=t.context,r=t.width,i=t.height;e.fillStyle="black",e.fillRect(0,0,r,i),n.forEach((function(n){var t=Object(l.a)(n,2),a=t[0],o=t[1],c=a*r,u=o*i;e.beginPath(),e.arc(c,u,100,0,2*Math.PI,!1),e.strokeStyle="red",e.lineWidth=40,e.stroke()}))}},m=e(4).lerp,y=function(){var n=function(){for(var n=[],t=0;t<150;t++)for(var e=0;e<150;e++){var r=t/149,i=e/149;n.push([r,i])}return n}().filter((function(n){var t=Object(l.a)(n,2);t[0],t[1];return Math.random()>.98}));return function(t){var e=t.context,r=t.width,i=t.height;e.fillStyle="#170b36",e.fillRect(0,0,r,i),n.forEach((function(n){var t=Object(l.a)(n,2),a=t[0],o=t[1],c=m(125,r-125,a),u=m(125,i-125,o);e.beginPath(),e.arc(c,u,.063,0,2*Math.PI,!1),e.strokeStyle="white",e.lineWidth=40,e.stroke()}))}},k=e(4).lerp,j=e(6),w=function(){var n=function(){for(var n=[],t=0;t<30;t++)for(var e=0;e<30;e++){var r=t/29,i=e/29;n.push({position:[r,i],radius:j.value()})}return n}().filter((function(n){n.position,n.radius;return j.value()>.45}));return function(t){var e=t.context,r=t.width,i=t.height;e.fillStyle="black",e.fillRect(0,0,r,i),n.forEach((function(n){var t=Object(l.a)(n.position,2),a=t[0],o=t[1],c=n.radius,u=k(260,r-260,a),s=k(260,i-260,o);e.beginPath(),e.arc(u,s,c*s*4,0,2*Math.PI,!1),e.strokeStyle="white",e.lineWidth=20,e.stroke()}))}},O=e(4).lerp,E=e(6),x=function(){var n=function(){for(var n=[],t=0;t<35;t++)for(var e=0;e<35;e++){var r=t/34,i=e/34,a=Math.abs(.014*E.gaussian());n.push({position:[r,i],radius:a})}return n}().filter((function(n){n.position,n.radius;return E.value()>.45}));return function(t){var e=t.context,r=t.width,i=t.height;e.fillStyle="pink",e.fillRect(0,0,r,i),n.forEach((function(n){var t=Object(l.a)(n.position,2),a=t[0],o=t[1],c=n.radius,u=O(260,r-260,a),s=O(260,i-260,o);e.beginPath(),e.arc(u,s,c*r,0,2*Math.PI,!1),e.fillStyle="white",e.lineWidth=20,e.fill()}))}},P=e(4).lerp,S=e(6),M=[v,g,y,w,x,function(){var n=function(){for(var n=[],t=0;t<35;t++)for(var e=0;e<35;e++){var r=t/34,i=e/34,a=Math.abs(.014*S.gaussian());n.push({position:[r,i],radius:a})}for(var o=[],c=0;c<70;c++)for(var l=0;l<70;l++){var u=c/69,s=l/69,f=Math.abs(.014*S.gaussian());o.push({position:[u,s],radius:f})}return{innerPoints:n,outterPoints:o}}(),t=n.innerPoints,e=n.outterPoints;return function(n){var r=n.context,i=n.width,a=n.height;r.fillStyle="pink",r.fillRect(0,0,i,a),t.forEach((function(n){var t=Object(l.a)(n.position,2),e=t[0],o=t[1],c=n.radius,u=P(900,i-900,e),s=P(900,a-900,o);r.beginPath(),r.arc(u,s,c*i,0,2*Math.PI,!1),r.fillStyle="#6e1212",r.lineWidth=20,r.fill()})),e.forEach((function(n){var t=Object(l.a)(n.position,2),e=t[0],o=t[1],c=n.radius,u=P(0,i,e),s=P(0,a,o);r.beginPath(),r.arc(u,s,c*i,0,2*Math.PI,!1),r.strokeStyle="#8a1515",r.lineWidth=2,r.stroke()}))}}];function R(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 4em;\n  opacity: 0.3;\n  padding: 1.5%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 813px) {\n    display: none;\n  }\n"]);return R=function(){return n},n}function I(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 4em;\n  opacity: 0.3;\n  padding: 1.5%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 813px) {\n    display: none;\n  }\n"]);return I=function(){return n},n}function q(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"]);return q=function(){return n},n}function W(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 5em;\n  opacity: 0.3;\n  padding: 1.5%;\n  margin-left: 2%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (max-width: 812px) {\n    display: none;\n  }\n"]);return W=function(){return n},n}function z(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 5em;\n  opacity: 0.3;\n  padding: 1.5%;\n  margin-right: 2%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (max-width: 812px) {\n    display: none;\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n\n  @media screen and (max-width: 812px) {\n    flex-direction: column;\n  }\n"]);return C=function(){return n},n}var L=f.b.div(C()),F=f.b.button(z()),A=f.b.button(W()),J=f.b.div(q()),B=f.b.button(I()),H=f.b.button(R()),T=function(){var n=Object(r.useState)(M[0]),t=Object(l.a)(n,2),e=t[0],a=t[1],o=Object(r.useState)(0),c=Object(l.a)(o,2),u=c[0],s=c[1],f=Object(r.useRef)(null),d=Object(r.useRef)(null),h=Object(r.useRef)(null),b=Object(r.useRef)(null),v=function(){u&&(a(M[u-1]),s(u-1))},g=function(){u<M.length-1&&(a(M[u+1]),s(u+1))},m=function(n){"ArrowLeft"===n.key?(f.current.focus(),h.current.focus(),v()):"ArrowRight"===n.key&&(d.current.focus(),b.current.focus(),g())};return Object(r.useEffect)((function(){return window.addEventListener("keydown",m),function(){window.removeEventListener("keydown",m)}}),[u]),i.a.createElement(i.a.Fragment,null,i.a.createElement(L,null,i.a.createElement(F,{ref:f,onClick:v},"<"),i.a.createElement(p,{sketch:e}),i.a.createElement(J,null,i.a.createElement(B,{ref:h,onClick:v},"<"),i.a.createElement(H,{ref:b,onClick:g},">")),i.a.createElement(A,{ref:d,onClick:g},">")))};function D(){var n=Object(c.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nhtml {\n\theight: 100%;\n\tbackground-color: black;\n}\n\nbody {\n    height: 100%;\n    line-height: 1.6;\n    display: flex;\n    justify-content: center;   \n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n*,\n*:before,\n*:after {\n\tbox-sizing: border-box;\n}\n"]);return D=function(){return n},n}var G=Object(f.a)(D());o.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(G,null),i.a.createElement(T,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9052d2ad.chunk.js.map