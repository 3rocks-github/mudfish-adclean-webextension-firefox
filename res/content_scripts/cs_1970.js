
function mudfish_adclean_52ff5c12f364cf4e86f69646f0ecbe4a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[src*="//image.munhwa.com/www/banner/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_52ff5c12f364cf4e86f69646f0ecbe4a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_52ff5c12f364cf4e86f69646f0ecbe4a();
  });
}
