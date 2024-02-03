
function mudfish_adclean_e23a0bff33071b60eb739501193cd95d() {
  try {
    Sizzle(`aside > div[class*=" "]:has(iframe[id^="google_ads_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e23a0bff33071b60eb739501193cd95d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e23a0bff33071b60eb739501193cd95d, function (items) {
  if (mudfish_adclean_g_conf_e23a0bff33071b60eb739501193cd95d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e23a0bff33071b60eb739501193cd95d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e23a0bff33071b60eb739501193cd95d();
    });
  }
});
