
function mudfish_adclean_12a7ca5a1db5e4f496962b2780a3af21() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section.content .thumbnail-area`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_12a7ca5a1db5e4f496962b2780a3af21();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_12a7ca5a1db5e4f496962b2780a3af21();
  });
}
