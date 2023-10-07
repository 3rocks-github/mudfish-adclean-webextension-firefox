
function mudfish_adclean_69c7ededc7ca83fb75a4c63ea10853ed() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main-content > .content-article:not(:has(+ .content-aside > div[data-tiara-layer][class="box_side"]))`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_69c7ededc7ca83fb75a4c63ea10853ed();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_69c7ededc7ca83fb75a4c63ea10853ed();
  });
}
