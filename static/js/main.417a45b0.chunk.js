(this["webpackJsonpreact-canvas-gen-art"]=this["webpackJsonpreact-canvas-gen-art"]||[]).push([[0],{17:function(n,e,t){n.exports=t(27)},27:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(12),i=t.n(a),c=t(2),l=t(1),u=t(13),f=t.n(u),s=t(3);function d(){var n=Object(c.a)(["\n  border: 3px solid white;\n"]);return d=function(){return n},n}var b={dimensions:[2048,2048]},h=s.b.canvas(d()),p=function(n){var e=n.sketch,t=Object(r.useRef)();return Object(r.useEffect)((function(){b.canvas=t.current,f()(e,b)}),[t,e]),o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{ref:t}))},v=function(n){var e=function(){for(var n=[],e=0;e<5;e++){var t=e/5,r=e/5;n.push([t,r])}return n}();return function(n){var t=n.context,r=n.width,o=n.height;t.fillStyle="#544813",t.fillRect(0,0,r,o),e.forEach((function(n){var e=Object(l.a)(n,2),a=e[0],i=e[1],c=a*r,u=i*o;t.beginPath(),t.arc(c,u,r/5,0,2*Math.PI,!1),t.strokeStyle="red",t.lineWidth=40,t.stroke(),t.beginPath(),t.arc(1.5*c,u,r/5,0,2*Math.PI,!1),t.strokeStyle="crimson",t.lineWidth=40,t.stroke(),t.beginPath(),t.arc(.5*c,u,r/5,0,2*Math.PI,!1),t.strokeStyle="orange",t.lineWidth=40,t.stroke()}))}},m=function(){var n=function(){for(var n=[],e=0;e<10;e++)for(var t=0;t<10;t++){var r=e/9,o=t/9;n.push([r,o])}return n}();return function(e){var t=e.context,r=e.width,o=e.height;t.fillStyle="black",t.fillRect(0,0,r,o),n.forEach((function(n){var e=Object(l.a)(n,2),a=e[0],i=e[1],c=a*r,u=i*o;t.beginPath(),t.arc(c,u,100,0,2*Math.PI,!1),t.strokeStyle="red",t.lineWidth=40,t.stroke()}))}},g=t(5).lerp,y=function(){var n=function(){for(var n=[],e=0;e<150;e++)for(var t=0;t<150;t++){var r=e/149,o=t/149;n.push([r,o])}return n}().filter((function(n){var e=Object(l.a)(n,2);e[0],e[1];return Math.random()>.98}));return function(e){var t=e.context,r=e.width,o=e.height;t.fillStyle="#170b36",t.fillRect(0,0,r,o),n.forEach((function(n){var e=Object(l.a)(n,2),a=e[0],i=e[1],c=g(125,r-125,a),u=g(125,o-125,i);t.beginPath(),t.arc(c,u,.063,0,2*Math.PI,!1),t.strokeStyle="white",t.lineWidth=40,t.stroke()}))}},k=t(5).lerp,j=t(11),w=function(){var n=function(){for(var n=[],e=0;e<30;e++)for(var t=0;t<30;t++){var r=e/29,o=t/29;n.push({position:[r,o],radius:j.value()})}return n}().filter((function(n){n.position,n.radius;return j.value()>.45}));return function(e){var t=e.context,r=e.width,o=e.height;t.fillStyle="black",t.fillRect(0,0,r,o),n.forEach((function(n){var e=Object(l.a)(n.position,2),a=e[0],i=e[1],c=n.radius,u=k(260,r-260,a),f=k(260,o-260,i);t.beginPath(),t.arc(u,f,c*f*4,0,2*Math.PI,!1),t.strokeStyle="white",t.lineWidth=20,t.stroke()}))}},O=t(5).lerp,E=t(11),x=[v,m,y,w,function(){var n=function(){for(var n=[],e=0;e<35;e++)for(var t=0;t<35;t++){var r=e/34,o=t/34,a=Math.abs(.014*E.gaussian());n.push({position:[r,o],radius:a})}return n}().filter((function(n){n.position,n.radius;return E.value()>.45}));return function(e){var t=e.context,r=e.width,o=e.height;t.fillStyle="pink",t.fillRect(0,0,r,o),n.forEach((function(n){var e=Object(l.a)(n.position,2),a=e[0],i=e[1],c=n.radius;console.log(a,i);var u=O(260,r-260,a),f=O(260,o-260,i);t.beginPath(),console.log("x:".concat(u,", y:").concat(f,", radius:").concat(c)),t.arc(u,f,c*r,0,2*Math.PI,!1),t.fillStyle="white",t.lineWidth=20,t.fill()}))}}];function P(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 4em;\n  opacity: 0.3;\n  padding: 1.5%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 813px) {\n    display: none;\n  }\n"]);return P=function(){return n},n}function S(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 4em;\n  opacity: 0.3;\n  padding: 1.5%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 813px) {\n    display: none;\n  }\n"]);return S=function(){return n},n}function R(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"]);return R=function(){return n},n}function M(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 5em;\n  opacity: 0.3;\n  padding: 1.5%;\n  margin-left: 2%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (max-width: 812px) {\n    display: none;\n  }\n"]);return M=function(){return n},n}function q(){var n=Object(c.a)(["\n  display: inline-block;\n  border: none;\n  background-color: black;\n  color: white;\n  font-size: 5em;\n  opacity: 0.3;\n  padding: 1.5%;\n  margin-right: 2%;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n\n  @media screen and (max-width: 812px) {\n    display: none;\n  }\n"]);return q=function(){return n},n}function I(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n\n  @media screen and (max-width: 812px) {\n    flex-direction: column;\n  }\n"]);return I=function(){return n},n}var W=s.b.div(I()),z=s.b.button(q()),C=s.b.button(M()),L=s.b.div(R()),F=s.b.button(S()),A=s.b.button(P()),J=function(){var n=Object(r.useState)(x[0]),e=Object(l.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(0),c=Object(l.a)(i,2),u=c[0],f=c[1],s=Object(r.useRef)(null),d=Object(r.useRef)(null),b=Object(r.useRef)(null),h=Object(r.useRef)(null),v=function(){u&&(a(x[u-1]),f(u-1))},m=function(){u<x.length-1&&(a(x[u+1]),f(u+1))},g=function(n){"ArrowLeft"===n.key?(s.current.focus(),b.current.focus(),v()):"ArrowRight"===n.key&&(d.current.focus(),h.current.focus(),m())};return Object(r.useEffect)((function(){return window.addEventListener("keydown",g),function(){window.removeEventListener("keydown",g)}}),[u]),o.a.createElement(o.a.Fragment,null,o.a.createElement(W,null,o.a.createElement(z,{ref:s,onClick:v},"<"),o.a.createElement(p,{sketch:t}),o.a.createElement(L,null,o.a.createElement(F,{ref:b,onClick:v},"<"),o.a.createElement(A,{ref:h,onClick:m},">")),o.a.createElement(C,{ref:d,onClick:m},">")))};function B(){var n=Object(c.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nhtml {\n\theight: 100%;\n\tbackground-color: black;\n}\n\nbody {\n    height: 100%;\n    line-height: 1.6;\n    display: flex;\n    justify-content: center;   \n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n*,\n*:before,\n*:after {\n\tbox-sizing: border-box;\n}\n"]);return B=function(){return n},n}var H=Object(s.a)(B());i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null),o.a.createElement(J,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.417a45b0.chunk.js.map