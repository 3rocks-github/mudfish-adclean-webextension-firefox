
function mudfish_adclean_8415b1d7c63a779910f662fa8caf7007() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.row > div[style=""].col-xs-12 ~ div[id] + div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8415b1d7c63a779910f662fa8caf7007();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8415b1d7c63a779910f662fa8caf7007();
  });
}
