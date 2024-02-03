
function mudfish_adclean_594648e1140acb6f4cef3599e654f67d() {
  try {
    Sizzle(`.popup`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_594648e1140acb6f4cef3599e654f67d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_594648e1140acb6f4cef3599e654f67d, function (items) {
  if (mudfish_adclean_g_conf_594648e1140acb6f4cef3599e654f67d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_594648e1140acb6f4cef3599e654f67d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_594648e1140acb6f4cef3599e654f67d();
    });
  }
});
