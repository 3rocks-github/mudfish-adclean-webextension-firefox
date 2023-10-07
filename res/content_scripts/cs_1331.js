
function mudfish_adclean_69fcb3a406f8d56dc872d6dcf7faffd0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[data-ezsrc*="//coupa.ng/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_69fcb3a406f8d56dc872d6dcf7faffd0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_69fcb3a406f8d56dc872d6dcf7faffd0();
  });
}
