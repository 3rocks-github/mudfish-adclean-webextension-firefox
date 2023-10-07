
function mudfish_adclean_287d25b0e087eff9705b6368685d2f44() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`header ~ header`).forEach(element => {
        element.style.marginTop = "50px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_287d25b0e087eff9705b6368685d2f44();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_287d25b0e087eff9705b6368685d2f44();
  });
}
