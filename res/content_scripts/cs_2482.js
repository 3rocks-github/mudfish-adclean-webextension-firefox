
function mudfish_adclean_9222b41668b509cad541c3d7e854ac37() {
  try {
    Sizzle(`.row > div[class^="col-xs-"]:not([id]):has(#focus-area > div[id^="div-gpt-ad-"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9222b41668b509cad541c3d7e854ac37 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9222b41668b509cad541c3d7e854ac37, function (items) {
  if (mudfish_adclean_g_conf_9222b41668b509cad541c3d7e854ac37.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9222b41668b509cad541c3d7e854ac37();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
