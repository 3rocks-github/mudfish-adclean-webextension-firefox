
function mudfish_adclean_a4e561b9948cbe18809520857774d65d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ContentsWrap section[style*="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a4e561b9948cbe18809520857774d65d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a4e561b9948cbe18809520857774d65d();
  });
}
