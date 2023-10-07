
function mudfish_adclean_873ce15091a02b3548be8c2b52e5138b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#container #content > .cpz_inner[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_873ce15091a02b3548be8c2b52e5138b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_873ce15091a02b3548be8c2b52e5138b();
  });
}
