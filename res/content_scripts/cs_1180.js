
function mudfish_adclean_f803a74cf5c3fceff287ff5fa68eb89b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[class$="-ads"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f803a74cf5c3fceff287ff5fa68eb89b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f803a74cf5c3fceff287ff5fa68eb89b();
  });
}
