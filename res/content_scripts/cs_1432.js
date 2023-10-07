
function mudfish_adclean_3db581adc12bcb5b5526f398842a14a3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src^="bncode2/banner_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3db581adc12bcb5b5526f398842a14a3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3db581adc12bcb5b5526f398842a14a3();
  });
}
