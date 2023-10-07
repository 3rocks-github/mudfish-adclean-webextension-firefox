
function mudfish_adclean_647a987fa8181c59a6a21c66ad0b3df5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#cont_warp table[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_647a987fa8181c59a6a21c66ad0b3df5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_647a987fa8181c59a6a21c66ad0b3df5();
  });
}
