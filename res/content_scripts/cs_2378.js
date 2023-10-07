
function mudfish_adclean_dfbac47e3f2f6b078650e2f6f72771e0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#header ~ header`).forEach(element => {
        element.style.marginTop = "50px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_dfbac47e3f2f6b078650e2f6f72771e0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_dfbac47e3f2f6b078650e2f6f72771e0();
  });
}
