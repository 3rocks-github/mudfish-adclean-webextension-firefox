
function mudfish_adclean_f31b56c4a6f359c6e8e78eb7bb0c8324() {
  try {
    Sizzle(`div[class*="_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f31b56c4a6f359c6e8e78eb7bb0c8324 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f31b56c4a6f359c6e8e78eb7bb0c8324, function (items) {
  if (mudfish_adclean_g_conf_f31b56c4a6f359c6e8e78eb7bb0c8324.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f31b56c4a6f359c6e8e78eb7bb0c8324();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f31b56c4a6f359c6e8e78eb7bb0c8324();
    });
  }
});
