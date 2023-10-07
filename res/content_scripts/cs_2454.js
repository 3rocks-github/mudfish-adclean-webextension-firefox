
function mudfish_adclean_a4cc7e2a541311e6d4856189d3ef10e8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main_center .line_deco_bottom:has(div[class^="ad_"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a4cc7e2a541311e6d4856189d3ef10e8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a4cc7e2a541311e6d4856189d3ef10e8();
  });
}
