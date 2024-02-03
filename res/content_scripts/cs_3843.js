
function mudfish_adclean_60599ee957820abf5c5a3c3e843878ba() {
  try {
    Sizzle(`body > div[id^="A1_"][style*="height:"] ~ #wrap`).forEach(element => {
      element.style.marginTop = "-1.5em !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_60599ee957820abf5c5a3c3e843878ba = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_60599ee957820abf5c5a3c3e843878ba, function (items) {
  if (mudfish_adclean_g_conf_60599ee957820abf5c5a3c3e843878ba.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_60599ee957820abf5c5a3c3e843878ba();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_60599ee957820abf5c5a3c3e843878ba();
    });
  }
});
