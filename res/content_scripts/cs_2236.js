
function mudfish_adclean_7ea3979715243023570f37aad64e773a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#id_my_menu_area ~ #main_sky_banner_area`).forEach(element => {
        element.style.marginLeft = "685px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7ea3979715243023570f37aad64e773a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7ea3979715243023570f37aad64e773a();
  });
}
