
function mudfish_adclean_79ad356a8aa868a2e2dfbddf7f63782f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href*="/bbs/link.php?bo_table=partner&"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_79ad356a8aa868a2e2dfbddf7f63782f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_79ad356a8aa868a2e2dfbddf7f63782f();
  });
}
