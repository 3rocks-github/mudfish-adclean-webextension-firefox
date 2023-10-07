
function mudfish_adclean_082fb1ac00ee28338ebcc970a01f96e5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.section-intro > .m-latest-renew:has(h3:contains(MD 추천도서))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_082fb1ac00ee28338ebcc970a01f96e5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_082fb1ac00ee28338ebcc970a01f96e5();
  });
}
