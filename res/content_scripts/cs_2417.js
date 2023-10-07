
function mudfish_adclean_25d88f5b5ce944319d03ec78c8066789() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[bgcolor][align] table[cellspacing][align] tr:has(table table strong > a[href*="?Board=enterprise"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_25d88f5b5ce944319d03ec78c8066789();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_25d88f5b5ce944319d03ec78c8066789();
  });
}
