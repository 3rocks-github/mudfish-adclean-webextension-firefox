
function mudfish_adclean_471ce8bf422fcc0cc09fd9711690c7b8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`pre > div[id]:has(> div[align] > a > img[src*="//img.postshare.co.kr/images/banner/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_471ce8bf422fcc0cc09fd9711690c7b8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_471ce8bf422fcc0cc09fd9711690c7b8();
  });
}
