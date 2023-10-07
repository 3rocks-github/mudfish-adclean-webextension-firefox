
function mudfish_adclean_40f384ebe5e690093c5fc4762bd16640() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#top-banner-ad`).forEach(element => {
        element.style.height = "1px !important";
element.style.position = "absolute !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_40f384ebe5e690093c5fc4762bd16640();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_40f384ebe5e690093c5fc4762bd16640();
  });
}
