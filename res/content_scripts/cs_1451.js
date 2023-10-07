
function mudfish_adclean_16a4b7b4daa1eb80eb506a2953ae22a9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="ads"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_16a4b7b4daa1eb80eb506a2953ae22a9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_16a4b7b4daa1eb80eb506a2953ae22a9();
  });
}
