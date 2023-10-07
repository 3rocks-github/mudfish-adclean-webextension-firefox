
function mudfish_adclean_6671b1f422c680332a59b62237eb38bc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="nbp_container"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6671b1f422c680332a59b62237eb38bc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6671b1f422c680332a59b62237eb38bc();
  });
}
