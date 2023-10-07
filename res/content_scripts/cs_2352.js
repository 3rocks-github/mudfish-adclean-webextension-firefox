
function mudfish_adclean_c5142fbf0a89707ea96258a1d1811dbb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#body_wrap > #body_main > div[style]:nth-child(1), #body_wrap > #body_main > div[style]:nth-child(3)`).forEach(element => {
        element.style.width = "calc(50% - 5px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c5142fbf0a89707ea96258a1d1811dbb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c5142fbf0a89707ea96258a1d1811dbb();
  });
}
