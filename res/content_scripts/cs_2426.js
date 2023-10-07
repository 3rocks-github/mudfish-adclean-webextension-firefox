
function mudfish_adclean_8530f5d478f3b7098959bb187d76a04d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.cate-search-result > .title:has(+ #powerPlus)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8530f5d478f3b7098959bb187d76a04d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8530f5d478f3b7098959bb187d76a04d();
  });
}
