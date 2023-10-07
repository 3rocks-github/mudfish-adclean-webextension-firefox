
function mudfish_adclean_61a1552dafc9984e7e0dbc391a90ad16() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-list-wrapper="ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_61a1552dafc9984e7e0dbc391a90ad16();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_61a1552dafc9984e7e0dbc391a90ad16();
  });
}
