(this["webpackJsonpreact-task-3"]=this["webpackJsonpreact-task-3"]||[]).push([[0],[,,function(e,t,a){e.exports={valueSetterWrapper:"ValueSetter_valueSetterWrapper__irPVg",inputBlock:"ValueSetter_inputBlock__3Q--m",btnBlock:"ValueSetter_btnBlock__1F52C"}},function(e,t,a){e.exports={input:"InputForm_input__2xDrQ",incorrectValue:"InputForm_incorrectValue__3BqFG"}},function(e,t,a){e.exports={counter:"Display_counter__3fg3n",prompt:"Display_prompt__eO4cT",error:"Display_error__1m-lA",counterStop:"Display_counterStop__l4NmT"}},function(e,t,a){e.exports={counterWrapper:"Counter_counterWrapper__2umnS",btnBlock:"Counter_btnBlock__SPUJx"}},,,function(e,t,a){e.exports={btn:"Button_btn__xy6if"}},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i);a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(1),o=(a(15),a(3)),u=a.n(o);function s(e){var t=e.error?u.a.incorrectValue:"";return r.a.createElement("div",{className:u.a.input},r.a.createElement("label",null,e.title,r.a.createElement("input",{className:t,type:"number",value:e.inputDigit,onChange:function(t){var a=Number(t.currentTarget.value);e.onChange(a,e.title)}})))}var m=a(8),p=a.n(m);function d(e){return r.a.createElement("button",{className:p.a.btn,disabled:e.disabled,onClick:function(){"inc"===e.title?e.changeDigit&&void 0!==e.displayedDigit&&e.changeDigit(e.displayedDigit+1):"reset"===e.title?e.changeDigit&&void 0!==e.startValue&&e.changeDigit(e.startValue):"set"===e.title&&e.onSetButtonClick&&e.onSetButtonClick()}},e.title)}var g=a(2),b=a.n(g),S=function(e){return r.a.createElement("div",{className:b.a.valueSetterWrapper},r.a.createElement("div",{className:b.a.inputBlock},r.a.createElement(s,{title:"max value:",inputDigit:e.maxValue,onChange:e.onValueChange,error:e.error}),r.a.createElement(s,{title:"start value:",inputDigit:e.startValue,onChange:e.onValueChange,error:e.error})),r.a.createElement("div",{className:b.a.btnBlock},r.a.createElement(d,{title:"set",disabled:e.disabledSet,onSetButtonClick:e.onSetButtonClick})))},_=a(4),v=a.n(_);function f(e){var t=e.displayedDigit===e.maxValue?v.a.counterStop:v.a.counter;return r.a.createElement("div",{className:t},e.displayedDigit)}var V=a(5),h=a.n(V),D=function(e){return r.a.createElement("div",{className:h.a.counterWrapper},r.a.createElement(f,{displayedDigit:e.displayedDigit,maxValue:e.maxValue}),r.a.createElement("div",{className:h.a.btnBlock},r.a.createElement(d,{title:"inc",disabled:e.disabledInc,changeDigit:e.changeDigit,displayedDigit:e.displayedDigit}),r.a.createElement(d,{title:"reset",changeDigit:e.changeDigit,startValue:e.startValue}),r.a.createElement(d,{title:"set",disabled:e.disabledSet,onSetButtonClick:e.onSetButtonClick})))};var k=function(){var e=Object(n.useState)(Number(localStorage.getItem("startValue"))||0),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(Number(localStorage.getItem("maxValue"))||5),o=Object(c.a)(l,2),u=o[0],s=o[1],m=Object(n.useState)(!1),p=Object(c.a)(m,2),d=p[0],g=p[1],b=Object(n.useState)(!1),_=Object(c.a)(b,2),v=_[0],f=_[1],V=Object(n.useState)(!1),h=Object(c.a)(V,2),k=h[0],E=h[1],B=Object(n.useState)(a),x=Object(c.a)(B,2),C=x[0],y=x[1],O=Object(n.useState)(!1),j=Object(c.a)(O,2),N=j[0],w=j[1];function I(){w(!N),y(a)}return Object(n.useEffect)((function(){localStorage.setItem("startValue",a.toString()),localStorage.setItem("maxValue",u.toString())}),[a,u]),r.a.createElement("div",{className:"app-wrapper"},N?r.a.createElement(S,{maxValue:u,startValue:a,onValueChange:function(e,t){"start value:"===t?i(a=e):"max value:"===t&&s(u=e),a<0||u<=a?(E(!0),g(!0)):(E(!1),g(!1))},error:d,disabledSet:k,onSetButtonClick:I}):r.a.createElement(D,{displayedDigit:C,startValue:a,maxValue:u,disabledInc:v,disabledSet:k,onSetButtonClick:I,changeDigit:function(e){y(e),function(e){e===u?f(!0):e===a&&f(!1)}(e)}}))};l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.148c3cfc.chunk.js.map