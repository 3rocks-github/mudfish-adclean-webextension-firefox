
function mudfish_adclean_fb16f94ea5106d3a9aa9ed27b87c66c3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#gallery-advert`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fb16f94ea5106d3a9aa9ed27b87c66c3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fb16f94ea5106d3a9aa9ed27b87c66c3();
  });
}
