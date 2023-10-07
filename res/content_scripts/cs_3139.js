
function mudfish_adclean_8676ab43e962b9263bfc83a9612cb3ec() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#right-sidebar`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8676ab43e962b9263bfc83a9612cb3ec();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8676ab43e962b9263bfc83a9612cb3ec();
  });
}
