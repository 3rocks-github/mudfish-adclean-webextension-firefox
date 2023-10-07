
function mudfish_adclean_2a81d409fa98b1641d016f6dd1a704d5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[src*="://thumb.toomics.com/upload/banner/"]:not([src*="/main/"]):not([src*="/cut/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2a81d409fa98b1641d016f6dd1a704d5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2a81d409fa98b1641d016f6dd1a704d5();
  });
}
