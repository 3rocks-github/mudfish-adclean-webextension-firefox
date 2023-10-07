
function mudfish_adclean_477908aed0d9a3dd8bcb1db7ce69152b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.eq.section div[class^="col-md-"] > center`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_477908aed0d9a3dd8bcb1db7ce69152b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_477908aed0d9a3dd8bcb1db7ce69152b();
  });
}
