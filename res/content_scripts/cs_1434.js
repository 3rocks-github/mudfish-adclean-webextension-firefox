
function mudfish_adclean_8d2ed80226be0fa2bc1c6efa16157795() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style=""] ~ div:not([style]):not([class]) table[width][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8d2ed80226be0fa2bc1c6efa16157795();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8d2ed80226be0fa2bc1c6efa16157795();
  });
}
