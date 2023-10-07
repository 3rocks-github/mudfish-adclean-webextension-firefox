
function mudfish_adclean_e7bf2ffef4c6624aa97fcca7380f4f50() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-use-adzerk][id$="-banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e7bf2ffef4c6624aa97fcca7380f4f50();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e7bf2ffef4c6624aa97fcca7380f4f50();
  });
}
