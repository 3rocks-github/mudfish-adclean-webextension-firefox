
function mudfish_adclean_2e468442ecc9553fdb63599e6ab84bce() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content_join`).forEach(element => {
        element.style.marginLeft = "calc(50% - 200px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2e468442ecc9553fdb63599e6ab84bce();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2e468442ecc9553fdb63599e6ab84bce();
  });
}
