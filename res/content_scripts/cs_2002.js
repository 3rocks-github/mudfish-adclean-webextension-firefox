
function mudfish_adclean_905f663a559e0bf2af752561c1c87b28() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.header-center.cf > .header-center-imgbox > a > img[src*="//cdn.mule.co.kr/data/original/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_905f663a559e0bf2af752561c1c87b28();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_905f663a559e0bf2af752561c1c87b28();
  });
}
