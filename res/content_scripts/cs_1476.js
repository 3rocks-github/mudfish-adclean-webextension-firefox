
function mudfish_adclean_21801a6f01b8b691f1e5d4425aed8dd8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#ai_widget-2`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_21801a6f01b8b691f1e5d4425aed8dd8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_21801a6f01b8b691f1e5d4425aed8dd8();
  });
}
