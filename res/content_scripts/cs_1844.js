
function mudfish_adclean_3471a3b8eb3d1929a99f58e1da73870c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[class^="banner_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3471a3b8eb3d1929a99f58e1da73870c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3471a3b8eb3d1929a99f58e1da73870c();
  });
}
