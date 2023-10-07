
function mudfish_adclean_2a8ab294dc52723cc1f4625f7b818320() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article`).forEach(element => {
        element.style.top = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2a8ab294dc52723cc1f4625f7b818320();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2a8ab294dc52723cc1f4625f7b818320();
  });
}
