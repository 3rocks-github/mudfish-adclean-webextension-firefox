
function mudfish_adclean_ef993c170e48dee6068b1b2ec9ef1cd5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#welcome_center > div:not([class]):not([style]):not([id])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ef993c170e48dee6068b1b2ec9ef1cd5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ef993c170e48dee6068b1b2ec9ef1cd5();
  });
}
