
function mudfish_adclean_d31c637aab74b76e1736602543d4db49() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.page-content > .row.no-gap.no-space > .col-33`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d31c637aab74b76e1736602543d4db49();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d31c637aab74b76e1736602543d4db49();
  });
}
