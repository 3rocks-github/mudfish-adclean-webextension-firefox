
function mudfish_adclean_6ef23dfebf6a15a59c2ee59d6362853a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.comment_inbox ul > li[style^="padding:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6ef23dfebf6a15a59c2ee59d6362853a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6ef23dfebf6a15a59c2ee59d6362853a();
  });
}
