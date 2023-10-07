
function mudfish_adclean_5eb785e8edf6ec0fe1ab29dbe1a0d796() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style].row.no-gutters > .col-3:not([style])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5eb785e8edf6ec0fe1ab29dbe1a0d796();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5eb785e8edf6ec0fe1ab29dbe1a0d796();
  });
}
