
function mudfish_adclean_c0d1f7452b04d60efeae8d5ff65cf9ac() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.search_box_listdeal > .aiplus`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c0d1f7452b04d60efeae8d5ff65cf9ac();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c0d1f7452b04d60efeae8d5ff65cf9ac();
  });
}
