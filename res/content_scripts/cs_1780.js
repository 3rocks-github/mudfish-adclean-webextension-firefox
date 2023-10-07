
function mudfish_adclean_0b2d5f1d3fd47ac6b08ccb5347d06013() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#popUP_ZONE`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0b2d5f1d3fd47ac6b08ccb5347d06013();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0b2d5f1d3fd47ac6b08ccb5347d06013();
  });
}
