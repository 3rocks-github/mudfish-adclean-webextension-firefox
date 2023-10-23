
function mudfish_adclean_60254476d79132ddd3cf5582b78f8ca8() {
  try {
    Sizzle(`.news_con > div[align]:has(> a[href*="//coupa.ng/"] > img[src*="//img.knowledgepower.co.kr/uploads/cpcbanner/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_60254476d79132ddd3cf5582b78f8ca8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_60254476d79132ddd3cf5582b78f8ca8, function (items) {
  if (mudfish_adclean_g_conf_60254476d79132ddd3cf5582b78f8ca8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_60254476d79132ddd3cf5582b78f8ca8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_60254476d79132ddd3cf5582b78f8ca8();
    });
  }
});
