
function mudfish_adclean_c3e13137e69d082f9f9640785d17ab4d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.news_view_con ~ div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c3e13137e69d082f9f9640785d17ab4d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c3e13137e69d082f9f9640785d17ab4d();
  });
}
