
function mudfish_adclean_dd0c37219ad55422a9b5c6e49a6ccf83() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#container > div[class^="content"] > section[id^="detailHotnews"] ~  aside[class^="aside-box"][class$="bg11"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_dd0c37219ad55422a9b5c6e49a6ccf83();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_dd0c37219ad55422a9b5c6e49a6ccf83();
  });
}
