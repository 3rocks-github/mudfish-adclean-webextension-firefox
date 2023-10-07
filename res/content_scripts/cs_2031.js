
function mudfish_adclean_85fb361e6f0f91e072e3fea6dbd8f698() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="//shop-redapi.daum.net/red-apigate/daumtop/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_85fb361e6f0f91e072e3fea6dbd8f698();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_85fb361e6f0f91e072e3fea6dbd8f698();
  });
}
