
function mudfish_adclean_968d285eba8891748925296dbfc18a6f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.right_btn`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_968d285eba8891748925296dbfc18a6f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_968d285eba8891748925296dbfc18a6f();
  });
}
