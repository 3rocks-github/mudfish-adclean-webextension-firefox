
function mudfish_adclean_ef52d8db0ed0956c9a9f4c2453fdc2a8() {
  try {
    Sizzle(`div[class^="DanjiInfomation__"] > div[class^="Divider__SD_Layout-"] + div[class^="Divider__SD_Layout-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ef52d8db0ed0956c9a9f4c2453fdc2a8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ef52d8db0ed0956c9a9f4c2453fdc2a8, function (items) {
  if (mudfish_adclean_g_conf_ef52d8db0ed0956c9a9f4c2453fdc2a8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ef52d8db0ed0956c9a9f4c2453fdc2a8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ef52d8db0ed0956c9a9f4c2453fdc2a8();
    });
  }
});
