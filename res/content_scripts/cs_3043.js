
function mudfish_adclean_98722a9a3d97caaa7cfa60f71ab937c4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_4`).forEach(element => {
        element.style.width = "240px !important";
element.style.left = "717px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_98722a9a3d97caaa7cfa60f71ab937c4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_98722a9a3d97caaa7cfa60f71ab937c4();
  });
}
