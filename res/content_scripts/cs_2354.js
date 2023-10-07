
function mudfish_adclean_2d258462cf727785a94fe122ae231a48() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.area_ranking`).forEach(element => {
        element.style.top = "400px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2d258462cf727785a94fe122ae231a48();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2d258462cf727785a94fe122ae231a48();
  });
}
