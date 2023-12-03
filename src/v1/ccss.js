const root = document.body;
const ccss = window.getComputedStyle(root, null);
let ccss_render = cssObj.getPropertyValue("--html");
document.write(ccss_render);
