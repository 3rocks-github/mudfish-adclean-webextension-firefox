
function mudfish_adclean_99696bc8b222c8a76e768cabf163d2bc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#popup-root`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_99696bc8b222c8a76e768cabf163d2bc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_99696bc8b222c8a76e768cabf163d2bc();
  });
}
