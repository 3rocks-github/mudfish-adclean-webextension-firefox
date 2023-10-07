
function mudfish_adclean_e351485cb976bb330255aeca1fa69be4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul.masonry-2-col > li[class] ~ li:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e351485cb976bb330255aeca1fa69be4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e351485cb976bb330255aeca1fa69be4();
  });
}
