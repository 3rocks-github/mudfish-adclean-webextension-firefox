
function mudfish_adclean_312be75e5ff6330748d70462a2e3ca81() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#main_sec`).forEach(element => {
        element.style.marginTop = "100px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_312be75e5ff6330748d70462a2e3ca81();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_312be75e5ff6330748d70462a2e3ca81();
  });
}
