
function mudfish_adclean_d1314f4918aba84385c8bab4cbbb6d47() {
  try {
    Sizzle(`.mid-content-area .left-util-wrap .bot-util-area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d1314f4918aba84385c8bab4cbbb6d47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d1314f4918aba84385c8bab4cbbb6d47, function (items) {
  if (mudfish_adclean_g_conf_d1314f4918aba84385c8bab4cbbb6d47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d1314f4918aba84385c8bab4cbbb6d47();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
