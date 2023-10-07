
function mudfish_adclean_97ac0b476490bb05a027437bfc4c27bb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.at-row .basic-post-gallery`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_97ac0b476490bb05a027437bfc4c27bb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_97ac0b476490bb05a027437bfc4c27bb();
  });
}
