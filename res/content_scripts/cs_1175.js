
function mudfish_adclean_bdec9b1a2f553f148c22c9fd764eace2() {
  try {
    Sizzle(`div[id^="AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bdec9b1a2f553f148c22c9fd764eace2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bdec9b1a2f553f148c22c9fd764eace2, function (items) {
  if (mudfish_adclean_g_conf_bdec9b1a2f553f148c22c9fd764eace2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bdec9b1a2f553f148c22c9fd764eace2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bdec9b1a2f553f148c22c9fd764eace2();
    });
  }
});
