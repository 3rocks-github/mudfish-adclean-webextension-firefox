
function mudfish_adclean_25e2ddbbdce009f4c15a5386e0d046db() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="pp_ban_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_25e2ddbbdce009f4c15a5386e0d046db();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_25e2ddbbdce009f4c15a5386e0d046db();
  });
}
