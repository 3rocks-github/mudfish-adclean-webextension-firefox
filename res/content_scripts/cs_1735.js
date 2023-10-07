
function mudfish_adclean_a24eb93eda14f7ac2d62b7104eb0dc97() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.thecontent > .in-article-container`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a24eb93eda14f7ac2d62b7104eb0dc97();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a24eb93eda14f7ac2d62b7104eb0dc97();
  });
}
