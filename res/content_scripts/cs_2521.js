
function mudfish_adclean_a5e0171a6093d93b998c2de4e2a9aa3d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.fancybox-wrap:has(> .fancybox-skin > div > div > #dialoga.wst_ad_badge)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a5e0171a6093d93b998c2de4e2a9aa3d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a5e0171a6093d93b998c2de4e2a9aa3d();
  });
}
