const root = document.body;
const ccss = window.getComputedStyle(root, null);
let ccss_render = ccss.getPropertyValue("--html");
document.write(ccss_render);
