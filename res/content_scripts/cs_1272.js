
function mudfish_adclean_88b9d2582184fdd391e8f201f4630bff() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="_content"][class^="content_"] > div[class^="list_top_"]:not([class*=" "])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_88b9d2582184fdd391e8f201f4630bff();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_88b9d2582184fdd391e8f201f4630bff();
  });
}
