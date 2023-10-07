
function mudfish_adclean_98622e1348b1efa23dcb0fc7dffa423b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#wrap_cnts td[valign="top"] #wrap_ctgr_new > div[id]`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_98622e1348b1efa23dcb0fc7dffa423b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_98622e1348b1efa23dcb0fc7dffa423b();
  });
}
