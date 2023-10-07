
function mudfish_adclean_318b9c3274d340c7136fa41f56b63653() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="mobitree"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_318b9c3274d340c7136fa41f56b63653();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_318b9c3274d340c7136fa41f56b63653();
  });
}
