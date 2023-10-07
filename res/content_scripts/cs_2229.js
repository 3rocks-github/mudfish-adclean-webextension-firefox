
function mudfish_adclean_731cbea1fa74bebdbb5b071f1ece058d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ask_wrapper .ask_title_zone`).forEach(element => {
        element.style.top = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_731cbea1fa74bebdbb5b071f1ece058d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_731cbea1fa74bebdbb5b071f1ece058d();
  });
}
