
function mudfish_adclean_e1ffaffb93870923a840ef2cdcfdc6b8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href*="?bo_table=partner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e1ffaffb93870923a840ef2cdcfdc6b8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e1ffaffb93870923a840ef2cdcfdc6b8();
  });
}
