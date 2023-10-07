
function mudfish_adclean_e8840db3a2e3e358fd987a1b804f2315() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#header`).forEach(element => {
        element.style.marginBottom = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e8840db3a2e3e358fd987a1b804f2315();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e8840db3a2e3e358fd987a1b804f2315();
  });
}
