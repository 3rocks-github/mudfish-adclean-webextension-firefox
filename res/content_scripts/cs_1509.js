
function mudfish_adclean_1303c098ad5be211c8f57ed7e5b14cc7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#welcome_Right > .evntall`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1303c098ad5be211c8f57ed7e5b14cc7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1303c098ad5be211c8f57ed7e5b14cc7();
  });
}
