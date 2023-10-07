
function mudfish_adclean_0cf3866a3884209e7f5cee6815a0a827() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.top_logo .top_logo_img`).forEach(element => {
        element.style.marginLeft = "200px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0cf3866a3884209e7f5cee6815a0a827();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0cf3866a3884209e7f5cee6815a0a827();
  });
}
