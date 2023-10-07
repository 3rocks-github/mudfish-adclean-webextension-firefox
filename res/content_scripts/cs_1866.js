
function mudfish_adclean_c42d01812711c9147f12adfec64f0fd9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.top-navigation .wrapper > .row.equal > div[class="col-xs-12 col-sm-6 col-lg-4"][style^="padding:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c42d01812711c9147f12adfec64f0fd9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c42d01812711c9147f12adfec64f0fd9();
  });
}
