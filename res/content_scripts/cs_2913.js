
function mudfish_adclean_14613c1d5e130d59f7b651b5442ce428() {
  try {
    Sizzle(`div[class*="Banner"] div[data-swiper-slide-index].swiper-slide:has(a[href^="/banners/"])`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_14613c1d5e130d59f7b651b5442ce428 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_14613c1d5e130d59f7b651b5442ce428, function (items) {
  if (mudfish_adclean_g_conf_14613c1d5e130d59f7b651b5442ce428.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_14613c1d5e130d59f7b651b5442ce428();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
