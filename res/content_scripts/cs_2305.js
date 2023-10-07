
function mudfish_adclean_e24c7573847bd5eeb132f3f5bc484eb6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wide_layout .wrap_srch_res [class*="prod_type2"]`).forEach(element => {
        element.style.width = "1275px !important";
element.style.borderLeft = "1px solid #e4e4e4 !important";
element.style.backgroundImage = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e24c7573847bd5eeb132f3f5bc484eb6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e24c7573847bd5eeb132f3f5bc484eb6();
  });
}
