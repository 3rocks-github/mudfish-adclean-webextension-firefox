
function mudfish_adclean_43d05d1ea905783f627a46fd0fdbb3ca() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.bch-main-wrapper > .right-cont`).forEach(element => {
        element.style.marginRight = "calc(50% - 180px) !important";
element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_43d05d1ea905783f627a46fd0fdbb3ca();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_43d05d1ea905783f627a46fd0fdbb3ca();
  });
}
