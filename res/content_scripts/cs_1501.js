
function mudfish_adclean_96b3495f9c4f92e1dd2c24480c896f0e() {
  try {
    Sizzle(`.pop-layer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_96b3495f9c4f92e1dd2c24480c896f0e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_96b3495f9c4f92e1dd2c24480c896f0e, function (items) {
  if (mudfish_adclean_g_conf_96b3495f9c4f92e1dd2c24480c896f0e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_96b3495f9c4f92e1dd2c24480c896f0e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_96b3495f9c4f92e1dd2c24480c896f0e();
    });
  }
});
