
function mudfish_adclean_6c5c3da32bc69d00c33013fb06a03d23() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="flex"][class$="h-[250px]"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6c5c3da32bc69d00c33013fb06a03d23();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6c5c3da32bc69d00c33013fb06a03d23();
  });
}
