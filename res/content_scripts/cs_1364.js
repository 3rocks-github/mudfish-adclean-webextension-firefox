
function mudfish_adclean_d2d2a356efcc76ceb693a101ea3d7202() {
  try {
    Sizzle(`div[id^="pop-layer-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d2d2a356efcc76ceb693a101ea3d7202 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d2d2a356efcc76ceb693a101ea3d7202, function (items) {
  if (mudfish_adclean_g_conf_d2d2a356efcc76ceb693a101ea3d7202.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d2d2a356efcc76ceb693a101ea3d7202();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d2d2a356efcc76ceb693a101ea3d7202();
    });
  }
});
