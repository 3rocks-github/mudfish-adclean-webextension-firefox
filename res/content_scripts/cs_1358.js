
function mudfish_adclean_fa71e837f07bb2bf6f200e11ff147254() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="sponsor"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fa71e837f07bb2bf6f200e11ff147254();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fa71e837f07bb2bf6f200e11ff147254();
  });
}
