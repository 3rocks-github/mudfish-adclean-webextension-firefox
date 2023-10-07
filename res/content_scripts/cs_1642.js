
function mudfish_adclean_8d4c251670a55460d96ec3fd0c04ee35() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="-ad"]:not(.container):not([style])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8d4c251670a55460d96ec3fd0c04ee35();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8d4c251670a55460d96ec3fd0c04ee35();
  });
}
