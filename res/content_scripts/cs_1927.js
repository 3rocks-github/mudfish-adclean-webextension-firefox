
function mudfish_adclean_59b3c9c8c49f7bece2c6004d48ef4e88() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="popup_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_59b3c9c8c49f7bece2c6004d48ef4e88();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_59b3c9c8c49f7bece2c6004d48ef4e88();
  });
}
