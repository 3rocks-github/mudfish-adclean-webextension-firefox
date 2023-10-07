
function mudfish_adclean_2d15757749909830835187f97b162f22() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.container:has(~ div[style]#toTop) article.content`).forEach(element => {
        element.style.marginTop = "100px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2d15757749909830835187f97b162f22();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2d15757749909830835187f97b162f22();
  });
}
