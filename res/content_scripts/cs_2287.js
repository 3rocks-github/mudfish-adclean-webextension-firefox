
function mudfish_adclean_b6bf6135143320993d1628405f8390be() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.inner-main [data-cloud*="_ad_"] + div`).forEach(element => {
        element.style.marginTop = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b6bf6135143320993d1628405f8390be();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b6bf6135143320993d1628405f8390be();
  });
}
