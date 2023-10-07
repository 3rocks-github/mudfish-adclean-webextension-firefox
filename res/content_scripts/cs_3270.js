
function mudfish_adclean_690c80a3947b0c81b148d49df3bf97bc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="Ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_690c80a3947b0c81b148d49df3bf97bc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_690c80a3947b0c81b148d49df3bf97bc();
  });
}
