
function mudfish_adclean_24cbc587e515c7334faff1047e7af6bc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="section-"][class$="-topad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_24cbc587e515c7334faff1047e7af6bc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_24cbc587e515c7334faff1047e7af6bc();
  });
}
