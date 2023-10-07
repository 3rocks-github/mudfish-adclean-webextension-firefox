
function mudfish_adclean_d4ec036444107a775dea53b02fb3874f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_3`).forEach(element => {
        element.style.width = "239px !important";
element.style.left = "478px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d4ec036444107a775dea53b02fb3874f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d4ec036444107a775dea53b02fb3874f();
  });
}
