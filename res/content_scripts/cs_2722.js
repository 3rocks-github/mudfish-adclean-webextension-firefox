
function mudfish_adclean_afdea665d705f7b57da1db4b99e6ebc0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content-full`).forEach(element => {
        element.style.height = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_afdea665d705f7b57da1db4b99e6ebc0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_afdea665d705f7b57da1db4b99e6ebc0();
  });
}
