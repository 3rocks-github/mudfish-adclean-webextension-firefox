
function mudfish_adclean_b5c7e71b5cb466b5c514d28243690755() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.td-pb-span4.td-main-sidebar`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b5c7e71b5cb466b5c514d28243690755();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b5c7e71b5cb466b5c514d28243690755();
  });
}
