
function mudfish_adclean_12f036c52300b08f53fe368d497731e8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.right > .board-preview.board-ppomppu`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_12f036c52300b08f53fe368d497731e8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_12f036c52300b08f53fe368d497731e8();
  });
}
