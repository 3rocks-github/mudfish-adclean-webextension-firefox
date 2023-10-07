
function mudfish_adclean_a1d2d543fd0e986e949f6e947f43deca() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.aside_doctor .tour_box`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a1d2d543fd0e986e949f6e947f43deca();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a1d2d543fd0e986e949f6e947f43deca();
  });
}
