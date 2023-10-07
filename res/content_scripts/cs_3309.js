
function mudfish_adclean_6f0b72cbb0488d9e047aed218b5c5184() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6f0b72cbb0488d9e047aed218b5c5184();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6f0b72cbb0488d9e047aed218b5c5184();
  });
}
