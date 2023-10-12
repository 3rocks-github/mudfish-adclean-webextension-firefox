
function mudfish_adclean_a9f85f59479b409d21ddcc194f640a0b() {
  try {
    Sizzle(`#contEtc > #nativeAdWrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a9f85f59479b409d21ddcc194f640a0b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a9f85f59479b409d21ddcc194f640a0b, function (items) {
  if (mudfish_adclean_g_conf_a9f85f59479b409d21ddcc194f640a0b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a9f85f59479b409d21ddcc194f640a0b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
