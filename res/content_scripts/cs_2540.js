
function mudfish_adclean_1a182238459a0e7e1e9e5f2a911fb6b2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#board_top > div > .top_best.best_list:has(+ .col div[id^="ad_"])`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1a182238459a0e7e1e9e5f2a911fb6b2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1a182238459a0e7e1e9e5f2a911fb6b2();
  });
}
