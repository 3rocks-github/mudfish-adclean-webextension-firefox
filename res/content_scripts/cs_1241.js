
function mudfish_adclean_505f0c834e144b3d57e086ca59434ae7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.touch_none ~ div[style^="min-height:"].bd_back`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_505f0c834e144b3d57e086ca59434ae7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_505f0c834e144b3d57e086ca59434ae7();
  });
}
