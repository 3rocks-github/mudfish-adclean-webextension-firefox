
function mudfish_adclean_60254476d79132ddd3cf5582b78f8ca8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.news_con > div[align]:has(> a[href*="//coupa.ng/"] > img[src*="//img.knowledgepower.co.kr/uploads/cpcbanner/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_60254476d79132ddd3cf5582b78f8ca8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_60254476d79132ddd3cf5582b78f8ca8();
  });
}
