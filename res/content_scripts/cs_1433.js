
function mudfish_adclean_e781f056c6a86365fc528e9620b9c457() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#container_c .tbl tr td[style*="solid"] div[style^="height"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e781f056c6a86365fc528e9620b9c457();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e781f056c6a86365fc528e9620b9c457();
  });
}
