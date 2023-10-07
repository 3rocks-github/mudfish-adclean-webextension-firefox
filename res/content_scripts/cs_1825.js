
function mudfish_adclean_c527f075acb7b12c7baf8f8c63af41f1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body.home #contents > .floating`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c527f075acb7b12c7baf8f8c63af41f1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c527f075acb7b12c7baf8f8c63af41f1();
  });
}
