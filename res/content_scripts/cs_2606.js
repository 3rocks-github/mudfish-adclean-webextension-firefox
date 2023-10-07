
function mudfish_adclean_066d969b497a983c49d8e906d6419654() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ins.kakao_ad_area`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_066d969b497a983c49d8e906d6419654();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_066d969b497a983c49d8e906d6419654();
  });
}
