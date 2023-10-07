
function mudfish_adclean_d6e704447ff6322f3b897c38dce25efb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="styles_Banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d6e704447ff6322f3b897c38dce25efb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d6e704447ff6322f3b897c38dce25efb();
  });
}
