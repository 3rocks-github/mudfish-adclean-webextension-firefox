
function mudfish_adclean_90736feb3173975362a559cc9fbcf4ca() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#bo_ad`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_90736feb3173975362a559cc9fbcf4ca();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_90736feb3173975362a559cc9fbcf4ca();
  });
}
