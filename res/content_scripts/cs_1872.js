
function mudfish_adclean_3282e99cb1d6e3e2442ce4c19dfe8ccc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`center > .bn`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3282e99cb1d6e3e2442ce4c19dfe8ccc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3282e99cb1d6e3e2442ce4c19dfe8ccc();
  });
}
