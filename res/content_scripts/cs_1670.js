
function mudfish_adclean_d4a9131579cbc8a5844f9e75140c78d1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[class^="img_wrapper"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d4a9131579cbc8a5844f9e75140c78d1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d4a9131579cbc8a5844f9e75140c78d1();
  });
}
