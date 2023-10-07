
function mudfish_adclean_ef4612c2137928001311a1ae741950af() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table#revolution_main_table tr[class^="common-list"]:has(table a[href*="?id=pmarket&"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ef4612c2137928001311a1ae741950af();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ef4612c2137928001311a1ae741950af();
  });
}
