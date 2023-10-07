
function mudfish_adclean_a9f85f59479b409d21ddcc194f640a0b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contEtc > #nativeAdWrap`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a9f85f59479b409d21ddcc194f640a0b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a9f85f59479b409d21ddcc194f640a0b();
  });
}
