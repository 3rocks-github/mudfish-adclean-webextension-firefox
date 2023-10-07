
function mudfish_adclean_c41c3ab4b848ef336c18385f939968aa() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="tf.co.kr/public/layout/"][src*="/top_menu_bar_"][src*=".php"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c41c3ab4b848ef336c18385f939968aa();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c41c3ab4b848ef336c18385f939968aa();
  });
}
