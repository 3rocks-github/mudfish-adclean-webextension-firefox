
function mudfish_adclean_583d3b5cfe21dfd7dadb97b4a03f1bd3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="/advert/advert.php"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_583d3b5cfe21dfd7dadb97b4a03f1bd3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_583d3b5cfe21dfd7dadb97b4a03f1bd3();
  });
}
