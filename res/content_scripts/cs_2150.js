
function mudfish_adclean_cbcaa9335f7c0fb2cac04c8b57813e35() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[width][cellspacing] td[valign="top"] table[width][border="0"] td[height="100"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cbcaa9335f7c0fb2cac04c8b57813e35();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cbcaa9335f7c0fb2cac04c8b57813e35();
  });
}
