
function mudfish_adclean_61f259d007db48b0f6578ab2fe475cba() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="_Ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_61f259d007db48b0f6578ab2fe475cba();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_61f259d007db48b0f6578ab2fe475cba();
  });
}
