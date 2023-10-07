
function mudfish_adclean_eaa0d3e5d8edc40da2e622be859d503a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id$="-banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_eaa0d3e5d8edc40da2e622be859d503a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_eaa0d3e5d8edc40da2e622be859d503a();
  });
}
