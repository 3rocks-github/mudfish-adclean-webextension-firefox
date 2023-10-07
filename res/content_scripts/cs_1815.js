
function mudfish_adclean_baf27207b6c808612cab7170317b33c9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#container > div[class][style*="/GNBBottomLineBanner_"][style^="background-image:url("]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_baf27207b6c808612cab7170317b33c9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_baf27207b6c808612cab7170317b33c9();
  });
}
