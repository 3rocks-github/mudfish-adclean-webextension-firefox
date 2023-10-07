
function mudfish_adclean_bb7ee7d2119cbb486c7ff8136ab30ecd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contain > div[style^="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bb7ee7d2119cbb486c7ff8136ab30ecd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bb7ee7d2119cbb486c7ff8136ab30ecd();
  });
}
