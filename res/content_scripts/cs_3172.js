
function mudfish_adclean_c9ef67a5babb59cd93721c77ec880353() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.npia-board-gallery`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c9ef67a5babb59cd93721c77ec880353();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c9ef67a5babb59cd93721c77ec880353();
  });
}
