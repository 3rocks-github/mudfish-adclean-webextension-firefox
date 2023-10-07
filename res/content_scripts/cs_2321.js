
function mudfish_adclean_09cfcd9925ca20f2783d963fe2e6f243() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.articleView + .aside .smallbox + .smallbox`).forEach(element => {
        element.style.borderTop = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_09cfcd9925ca20f2783d963fe2e6f243();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_09cfcd9925ca20f2783d963fe2e6f243();
  });
}
