
function mudfish_adclean_1c14159ec6ea4b4c0380658ad9b76d0e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="left"] ~ div[class]:not([style]):has(ins.kakao_ad_area)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1c14159ec6ea4b4c0380658ad9b76d0e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1c14159ec6ea4b4c0380658ad9b76d0e();
  });
}
