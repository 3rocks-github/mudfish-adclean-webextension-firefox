
function mudfish_adclean_6c0ca6ed3dac1b33153facf3e56a5382() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#welcomeMainBanner_welcome_tab`).forEach(element => {
        element.style.left = "calc(50% - 186px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6c0ca6ed3dac1b33153facf3e56a5382();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6c0ca6ed3dac1b33153facf3e56a5382();
  });
}
