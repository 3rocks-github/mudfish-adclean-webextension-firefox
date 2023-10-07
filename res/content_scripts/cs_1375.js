
function mudfish_adclean_4746b3260809bb1e088732eb0d786a8a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`td[width]:not([valign]) ~ td[align="left"] ul.banner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4746b3260809bb1e088732eb0d786a8a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4746b3260809bb1e088732eb0d786a8a();
  });
}
