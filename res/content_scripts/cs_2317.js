
function mudfish_adclean_d24a742979f812d49b83f98fe7740b1b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#index > div[id^="index_box"][class]:not(.index_row_full)`).forEach(element => {
        element.style.marginLeft = "calc(50% - 145.5px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d24a742979f812d49b83f98fe7740b1b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d24a742979f812d49b83f98fe7740b1b();
  });
}
