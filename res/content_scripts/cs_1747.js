
function mudfish_adclean_d3f3a7a9f61272cf7340d49de3c1978a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#bbs > table[style^="color:#"] ~ div[style*="padding:"][style*="border-left"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d3f3a7a9f61272cf7340d49de3c1978a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d3f3a7a9f61272cf7340d49de3c1978a();
  });
}
