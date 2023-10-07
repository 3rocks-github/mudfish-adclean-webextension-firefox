
function mudfish_adclean_76a62366df6f3b824fef69094525e036() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.topbar-area:has(> .badge:contains(뉴스))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_76a62366df6f3b824fef69094525e036();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_76a62366df6f3b824fef69094525e036();
  });
}
