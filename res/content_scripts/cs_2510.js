
function mudfish_adclean_5ad6292a3b25a455dc0801a55f1ee8a6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body .view_sp_banner .swipe-slide:has(img[src^="https://recipe1.ezmember.co.kr/cache/shop/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5ad6292a3b25a455dc0801a55f1ee8a6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5ad6292a3b25a455dc0801a55f1ee8a6();
  });
}
