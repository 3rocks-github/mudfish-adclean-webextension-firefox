
function mudfish_adclean_cb2cbb97ba6b14550d8c4680d46871a8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.article-ad ~ p[style][class^="title"]`).forEach(element => {
        element.style.marginTop = "100px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cb2cbb97ba6b14550d8c4680d46871a8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cb2cbb97ba6b14550d8c4680d46871a8();
  });
}
