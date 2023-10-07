
function mudfish_adclean_3db210ec3f60e64dd15a9a35ae6847d3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content_body > div[class$="_coupang_wrap"]`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3db210ec3f60e64dd15a9a35ae6847d3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3db210ec3f60e64dd15a9a35ae6847d3();
  });
}
