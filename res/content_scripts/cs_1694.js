
function mudfish_adclean_cc35cbcc0e65a9a2dadcddf48b00dfde() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="-banner-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cc35cbcc0e65a9a2dadcddf48b00dfde();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cc35cbcc0e65a9a2dadcddf48b00dfde();
  });
}
