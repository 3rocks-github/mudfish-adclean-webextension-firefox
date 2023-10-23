
function mudfish_adclean_385beafde14a8c9d136b3f9f9d712620() {
  try {
    Sizzle(`div[id^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_385beafde14a8c9d136b3f9f9d712620 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_385beafde14a8c9d136b3f9f9d712620, function (items) {
  if (mudfish_adclean_g_conf_385beafde14a8c9d136b3f9f9d712620.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_385beafde14a8c9d136b3f9f9d712620();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_385beafde14a8c9d136b3f9f9d712620();
    });
  }
});
