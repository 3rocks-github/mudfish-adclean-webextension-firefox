
function mudfish_adclean_67c0c26d22157cdd5d0b6238bdf9e9e8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="div_new_power_link_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_67c0c26d22157cdd5d0b6238bdf9e9e8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_67c0c26d22157cdd5d0b6238bdf9e9e8();
  });
}
