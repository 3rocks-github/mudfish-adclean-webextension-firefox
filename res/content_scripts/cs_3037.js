
function mudfish_adclean_1abf7dfc205665608a24f71cc11984c6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mbnRoll_yNow > .mbnRollUnit > .pagen_1`).forEach(element => {
        element.style.width = "363px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1abf7dfc205665608a24f71cc11984c6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1abf7dfc205665608a24f71cc11984c6();
  });
}
