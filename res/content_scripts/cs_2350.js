
function mudfish_adclean_6c3b630487a251a41a8d4b97d689b183() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#section_body`).forEach(element => {
        element.style.borderTop = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6c3b630487a251a41a8d4b97d689b183();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6c3b630487a251a41a8d4b97d689b183();
  });
}
