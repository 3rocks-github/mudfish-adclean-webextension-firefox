
function mudfish_adclean_86882add2e6603e6ccf853701b2e0810() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.sidebar[style] > aside[id^="text-"][class] ~ aside[id^="text-"][class]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_86882add2e6603e6ccf853701b2e0810();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_86882add2e6603e6ccf853701b2e0810();
  });
}
