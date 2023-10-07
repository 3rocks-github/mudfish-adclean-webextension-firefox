
function mudfish_adclean_a3588cff3e097bf48516853346c1b332() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.grand_banner_wrap li.item_adagency`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a3588cff3e097bf48516853346c1b332();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a3588cff3e097bf48516853346c1b332();
  });
}
