!function(){var t={btnSrart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStop.setAttribute("disabled",null);var e=null;function a(t){""===t.target.dataset.start&&(n(),r(),e=setInterval(r,1e3)),""===t.target.dataset.stop&&(n(),clearInterval(e))}function n(){t.btnSrart.toggleAttribute("disabled"),t.btnStop.toggleAttribute("disabled")}function r(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.btnSrart.addEventListener("click",a),t.btnStop.addEventListener("click",a)}();
//# sourceMappingURL=01-color-switcher.18b607f0.js.map
