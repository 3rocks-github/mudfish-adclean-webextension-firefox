
function mudfish_adclean_f53c3e38245753315351076d2f83087f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content > #start_mainslide.cpz_mainslide`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f53c3e38245753315351076d2f83087f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f53c3e38245753315351076d2f83087f();
  });
}
