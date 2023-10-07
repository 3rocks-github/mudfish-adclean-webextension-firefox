
function mudfish_adclean_84a0aea93ca7b9f0f532a75f5fa80305() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="sdp-"][id$="-banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_84a0aea93ca7b9f0f532a75f5fa80305();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_84a0aea93ca7b9f0f532a75f5fa80305();
  });
}
