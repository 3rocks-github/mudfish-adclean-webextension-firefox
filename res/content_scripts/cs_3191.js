
function mudfish_adclean_5aa82e812e693f8cfc9b29e7fefb90c8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#containerCol .at-content .contents > a[href][target] > img[src^="/bann/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5aa82e812e693f8cfc9b29e7fefb90c8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5aa82e812e693f8cfc9b29e7fefb90c8();
  });
}
