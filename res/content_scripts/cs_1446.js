
function mudfish_adclean_ccc95e00d0427468295d511f8fd495dc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.component--chance_shopping`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ccc95e00d0427468295d511f8fd495dc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ccc95e00d0427468295d511f8fd495dc();
  });
}
