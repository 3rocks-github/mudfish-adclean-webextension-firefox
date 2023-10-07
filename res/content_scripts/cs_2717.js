
function mudfish_adclean_a05194b82c861ba4d9d8125ff0c9444d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#no_pages.bg_w`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a05194b82c861ba4d9d8125ff0c9444d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a05194b82c861ba4d9d8125ff0c9444d();
  });
}
