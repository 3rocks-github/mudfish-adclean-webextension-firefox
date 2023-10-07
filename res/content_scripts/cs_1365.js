
function mudfish_adclean_1f6950649c3a502fd60c270ddd63d9cd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.inside-right-sidebar > aside[id^="custom_html-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1f6950649c3a502fd60c270ddd63d9cd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1f6950649c3a502fd60c270ddd63d9cd();
  });
}
