
function mudfish_adclean_629476d9d779a50aa0ecb87df8f59464() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#gap > div[style*=": "].xe-widget-wrapper:has(.widget_banner_skin > .banner_list)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_629476d9d779a50aa0ecb87df8f59464();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_629476d9d779a50aa0ecb87df8f59464();
  });
}
