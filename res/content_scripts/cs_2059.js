
function mudfish_adclean_577973d1b1be9e4552ca26e983ed196f() {
  try {
    Sizzle(`#sdp-bottom-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_577973d1b1be9e4552ca26e983ed196f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_577973d1b1be9e4552ca26e983ed196f, function (items) {
  if (mudfish_adclean_g_conf_577973d1b1be9e4552ca26e983ed196f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_577973d1b1be9e4552ca26e983ed196f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
