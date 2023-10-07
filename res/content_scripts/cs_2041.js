
function mudfish_adclean_4190cde5ab09c6f89f8af8252cf957be() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[onmousedown*="'event_label': 'AD'"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4190cde5ab09c6f89f8af8252cf957be();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4190cde5ab09c6f89f8af8252cf957be();
  });
}
