
function mudfish_adclean_aaa86f4e0dd193342e0e7670b96bf748() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ask_hamburger_wrapper`).forEach(element => {
        element.style.top = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_aaa86f4e0dd193342e0e7670b96bf748();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_aaa86f4e0dd193342e0e7670b96bf748();
  });
}
