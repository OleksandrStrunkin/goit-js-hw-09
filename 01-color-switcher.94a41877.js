!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){n.start(),t.setAttribute("disabled",!1),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){n.stop(),t.removeAttribute("disabled"),e.setAttribute("disabled",!1)}));var n={intervalId:null,start:function(){this.intervalId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)},stop:function(){clearInterval(this.intervalId)}}}();
//# sourceMappingURL=01-color-switcher.94a41877.js.map
