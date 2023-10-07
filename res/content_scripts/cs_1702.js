
function mudfish_adclean_c88e1c13a8da9b92c0773a0e554a4035() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="codad_ban"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c88e1c13a8da9b92c0773a0e554a4035();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c88e1c13a8da9b92c0773a0e554a4035();
  });
}
