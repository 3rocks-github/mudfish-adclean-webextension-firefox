
function mudfish_adclean_bd458a1b69315cc91309655919128087() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[id^="block-"].widget_block`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bd458a1b69315cc91309655919128087();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bd458a1b69315cc91309655919128087();
  });
}
