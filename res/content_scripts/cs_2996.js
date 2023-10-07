
function mudfish_adclean_9e5ff465ceca86561125c60c5a0a9d70() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#welcomeTodayPop > section[id^="section"][id$="Pop"][style^="display:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9e5ff465ceca86561125c60c5a0a9d70();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9e5ff465ceca86561125c60c5a0a9d70();
  });
}
