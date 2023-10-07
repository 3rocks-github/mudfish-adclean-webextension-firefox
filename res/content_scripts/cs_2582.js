
function mudfish_adclean_711ece983418dc41474e0b3cab04c9bc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.app > div > div > div[class]:has(> div[class] > div[class] > div[class]:contains(파워링크))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_711ece983418dc41474e0b3cab04c9bc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_711ece983418dc41474e0b3cab04c9bc();
  });
}
