
function mudfish_adclean_71b2ba04016953a55dd233e345f90f6a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.swim-side .module_plugin:has(a[target="_blank"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_71b2ba04016953a55dd233e345f90f6a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_71b2ba04016953a55dd233e345f90f6a();
  });
}
