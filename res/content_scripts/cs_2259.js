
function mudfish_adclean_0b2061d5c0463f887de300c53d4ad4d4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.td-is-sticky > .wpb_wrapper`).forEach(element => {
        element.style.top = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0b2061d5c0463f887de300c53d4ad4d4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0b2061d5c0463f887de300c53d4ad4d4();
  });
}
