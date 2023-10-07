
function mudfish_adclean_122a9f7b5aa5e37390e0092137820d1a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[src^="/images/banner/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_122a9f7b5aa5e37390e0092137820d1a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_122a9f7b5aa5e37390e0092137820d1a();
  });
}
