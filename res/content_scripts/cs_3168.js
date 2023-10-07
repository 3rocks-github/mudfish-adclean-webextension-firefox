
function mudfish_adclean_e9aeb2f01a9649ad64032f3eda881b8a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[x-data="popups()"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e9aeb2f01a9649ad64032f3eda881b8a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e9aeb2f01a9649ad64032f3eda881b8a();
  });
}
