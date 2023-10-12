
function mudfish_adclean_1c14159ec6ea4b4c0380658ad9b76d0e() {
  try {
    Sizzle(`div[class^="left"] ~ div[class]:not([style]):has(ins.kakao_ad_area)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1c14159ec6ea4b4c0380658ad9b76d0e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1c14159ec6ea4b4c0380658ad9b76d0e, function (items) {
  if (mudfish_adclean_g_conf_1c14159ec6ea4b4c0380658ad9b76d0e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1c14159ec6ea4b4c0380658ad9b76d0e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
