
function mudfish_adclean_14613c1d5e130d59f7b651b5442ce428() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="Banner"] div[data-swiper-slide-index].swiper-slide:has(a[href^="/banners/"])`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_14613c1d5e130d59f7b651b5442ce428();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_14613c1d5e130d59f7b651b5442ce428();
  });
}
