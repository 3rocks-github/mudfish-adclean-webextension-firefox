
function mudfish_adclean_8ec0a5df1117fa051125b7f1bfc4b16b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.body.mwcphide`).forEach(element => {
        element.style.height = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8ec0a5df1117fa051125b7f1bfc4b16b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8ec0a5df1117fa051125b7f1bfc4b16b();
  });
}
