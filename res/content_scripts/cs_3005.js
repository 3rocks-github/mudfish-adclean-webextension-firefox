
function mudfish_adclean_c374fd6fa9ad0659ea75048cd4f33f08() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_7`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c374fd6fa9ad0659ea75048cd4f33f08();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c374fd6fa9ad0659ea75048cd4f33f08();
  });
}
