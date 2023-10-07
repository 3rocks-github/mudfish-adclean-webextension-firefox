
function mudfish_adclean_f98a58809dee461818d7575e36f9a11e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.trendtabs__list > li[data-adv_yn="Y"]`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f98a58809dee461818d7575e36f9a11e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f98a58809dee461818d7575e36f9a11e();
  });
}
