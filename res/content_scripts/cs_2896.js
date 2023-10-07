
function mudfish_adclean_295a05202a07c745ffb3d940a0bf8566() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.e17e77tq6`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_295a05202a07c745ffb3d940a0bf8566();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_295a05202a07c745ffb3d940a0bf8566();
  });
}
