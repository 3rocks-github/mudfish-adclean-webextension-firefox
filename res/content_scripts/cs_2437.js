
function mudfish_adclean_82cb7c1f279f211b64f67ed0387c79f7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.maj_list_wrap > .majnews_list:has(iframe[src*="//ads.mncmedia.co.kr/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_82cb7c1f279f211b64f67ed0387c79f7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_82cb7c1f279f211b64f67ed0387c79f7();
  });
}
