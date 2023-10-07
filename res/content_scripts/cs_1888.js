
function mudfish_adclean_881aaefd375b1bc47bb614ec6ff8517a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class*="ad_bizwatch_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_881aaefd375b1bc47bb614ec6ff8517a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_881aaefd375b1bc47bb614ec6ff8517a();
  });
}
