
function mudfish_adclean_5ad6292a3b25a455dc0801a55f1ee8a6() {
  try {
    Sizzle(`body .view_sp_banner .swipe-slide:has(img[src^="https://recipe1.ezmember.co.kr/cache/shop/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5ad6292a3b25a455dc0801a55f1ee8a6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5ad6292a3b25a455dc0801a55f1ee8a6, function (items) {
  if (mudfish_adclean_g_conf_5ad6292a3b25a455dc0801a55f1ee8a6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5ad6292a3b25a455dc0801a55f1ee8a6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
