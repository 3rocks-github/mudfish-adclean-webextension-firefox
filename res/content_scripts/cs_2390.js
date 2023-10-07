
function mudfish_adclean_f0637a8d7096a14f7090a9d05d0b69d9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="style_section_row_"] > div[class*=" asideItem_active_"]:has(a[class^="adRecommend_"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f0637a8d7096a14f7090a9d05d0b69d9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f0637a8d7096a14f7090a9d05d0b69d9();
  });
}
