
function mudfish_adclean_55a85d7452b3652b75c664e1561f7d46() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#region--content_floating ~ #region--content_body div[module-design-id]:has(.button--power_click)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_55a85d7452b3652b75c664e1561f7d46();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_55a85d7452b3652b75c664e1561f7d46();
  });
}
