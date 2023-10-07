
function mudfish_adclean_eeb8224d55bd0faf02ca9c127914cbff() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.alert-danger.container:contains([AD])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_eeb8224d55bd0faf02ca9c127914cbff();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_eeb8224d55bd0faf02ca9c127914cbff();
  });
}
