
function mudfish_adclean_97a48d1ef5545e178f3ccc0e0ad75cfc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.box__component-sponsor-link`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_97a48d1ef5545e178f3ccc0e0ad75cfc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_97a48d1ef5545e178f3ccc0e0ad75cfc();
  });
}
