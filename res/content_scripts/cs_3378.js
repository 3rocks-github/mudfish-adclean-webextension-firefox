
function mudfish_adclean_7538903909cda8eaa54e6ecadd6d2d61() {
  try {
    Sizzle(`aticle div[style]:not([id]):not([class]):not([itemprop])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7538903909cda8eaa54e6ecadd6d2d61 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7538903909cda8eaa54e6ecadd6d2d61, function (items) {
  if (mudfish_adclean_g_conf_7538903909cda8eaa54e6ecadd6d2d61.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7538903909cda8eaa54e6ecadd6d2d61();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
