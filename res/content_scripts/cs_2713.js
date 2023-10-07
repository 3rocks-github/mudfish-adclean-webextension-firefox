
function mudfish_adclean_da19e0664f93b2ba6d4fb729be34779c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#hd_qnb`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_da19e0664f93b2ba6d4fb729be34779c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_da19e0664f93b2ba6d4fb729be34779c();
  });
}
