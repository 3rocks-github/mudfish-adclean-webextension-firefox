
function mudfish_adclean_1dae491a1185f853816f3db49954a943() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aside .box-margins:has(~ .box-skin.point-title)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1dae491a1185f853816f3db49954a943();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1dae491a1185f853816f3db49954a943();
  });
}
