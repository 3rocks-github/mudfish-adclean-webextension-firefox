
function mudfish_adclean_c03f88d697f6b52e8bda4a0f766d250f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#frameBox`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c03f88d697f6b52e8bda4a0f766d250f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c03f88d697f6b52e8bda4a0f766d250f();
  });
}
