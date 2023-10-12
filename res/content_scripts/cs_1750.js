
function mudfish_adclean_66f471f290ca4f577cf4cc9f3b639662() {
  try {
    Sizzle(`iframe[src*="//ad.pping.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_66f471f290ca4f577cf4cc9f3b639662 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_66f471f290ca4f577cf4cc9f3b639662, function (items) {
  if (mudfish_adclean_g_conf_66f471f290ca4f577cf4cc9f3b639662.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_66f471f290ca4f577cf4cc9f3b639662();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
