
function mudfish_adclean_c5bd303d977c7ec437a49e5f30378c06() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="divEzad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c5bd303d977c7ec437a49e5f30378c06();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c5bd303d977c7ec437a49e5f30378c06();
  });
}
