
function mudfish_adclean_82cb7c1f279f211b64f67ed0387c79f7() {
  try {
    Sizzle(`.maj_list_wrap > .majnews_list:has(iframe[src*="//ads.mncmedia.co.kr/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_82cb7c1f279f211b64f67ed0387c79f7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_82cb7c1f279f211b64f67ed0387c79f7, function (items) {
  if (mudfish_adclean_g_conf_82cb7c1f279f211b64f67ed0387c79f7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_82cb7c1f279f211b64f67ed0387c79f7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
