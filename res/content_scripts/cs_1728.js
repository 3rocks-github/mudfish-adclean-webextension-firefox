
function mudfish_adclean_edeab7d8d5040ea89e05b701f6e49c9a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#header-top-notice`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_edeab7d8d5040ea89e05b701f6e49c9a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_edeab7d8d5040ea89e05b701f6e49c9a();
  });
}
