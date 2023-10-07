
function mudfish_adclean_866acd991e3b16956d182a51106049f9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style^="height"]#slrclub`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_866acd991e3b16956d182a51106049f9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_866acd991e3b16956d182a51106049f9();
  });
}
