
function mudfish_adclean_122a9f7b5aa5e37390e0092137820d1a() {
  try {
    Sizzle(`img[src^="/images/banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_122a9f7b5aa5e37390e0092137820d1a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_122a9f7b5aa5e37390e0092137820d1a, function (items) {
  if (mudfish_adclean_g_conf_122a9f7b5aa5e37390e0092137820d1a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_122a9f7b5aa5e37390e0092137820d1a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
