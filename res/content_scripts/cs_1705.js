
function mudfish_adclean_fa18757980ab7cfe24899ff6e623cd73() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style~="#D5D5D5;"][style~="border-bottom:1px"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fa18757980ab7cfe24899ff6e623cd73();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fa18757980ab7cfe24899ff6e623cd73();
  });
}
