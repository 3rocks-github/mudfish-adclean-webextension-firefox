
function mudfish_adclean_5bde916d793eb42f0dcdc4202b90c2f1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.cpz_inner .category_set_area div[class^="second_cate_area"] div[class^="catebnr_area"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5bde916d793eb42f0dcdc4202b90c2f1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5bde916d793eb42f0dcdc4202b90c2f1();
  });
}
