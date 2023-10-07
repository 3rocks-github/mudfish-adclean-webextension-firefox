
function mudfish_adclean_65d9d0f8b22d175c13cb0299d4817ca7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.et_vars`).forEach(element => {
        element.style.height = "auto !important";
element.style.overflow = "visible !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_65d9d0f8b22d175c13cb0299d4817ca7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_65d9d0f8b22d175c13cb0299d4817ca7();
  });
}
