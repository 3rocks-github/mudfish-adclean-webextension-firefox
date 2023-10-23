
function mudfish_adclean_cd0eb98dd25d273edfd656fd9625d63e() {
  try {
    Sizzle(`#container aside[class^="aside-"]:has(ul[id^="ad"], iframe:matches-css(display: none))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cd0eb98dd25d273edfd656fd9625d63e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cd0eb98dd25d273edfd656fd9625d63e, function (items) {
  if (mudfish_adclean_g_conf_cd0eb98dd25d273edfd656fd9625d63e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cd0eb98dd25d273edfd656fd9625d63e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cd0eb98dd25d273edfd656fd9625d63e();
    });
  }
});
