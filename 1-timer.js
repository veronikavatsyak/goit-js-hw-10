import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as b}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("#datetime-picker"),o=document.querySelectorAll(".timer .value"),r=document.querySelector('button[type="button"]');r.addEventListener("click",C);let d,u;const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=l.defaultDate?(b.show({title:"Error",titleColor:"white",titleSize:"16",messageColor:"white",messageSize:"16",message:"Please choose a date in the future",backgroundColor:"red",position:"topRight",timeout:5e3}),r.disabled=!0):(r.disabled=!1,d=t[0])}};y("#datetime-picker",l);function g(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:p}}function n(t){return String(t).padStart(2,"0")}function c({days:t,hours:e,minutes:i,seconds:s}){o[0].textContent=n(t),o[1].textContent=n(e),o[2].textContent=n(i),o[3].textContent=n(s)}function C(){r.disabled=!0,a.disabled=!0,u=setInterval(()=>{const e=d-new Date;e>0?c(g(e)):(clearInterval(u),c({days:0,hours:0,minutes:0,seconds:0}),a.disabled=!1)},1e3)}
//# sourceMappingURL=1-timer.js.map