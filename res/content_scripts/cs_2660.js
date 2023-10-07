
function mudfish_adclean_4785b4dbb168f6e65f797e4a9a9fe500() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.topAD`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4785b4dbb168f6e65f797e4a9a9fe500();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4785b4dbb168f6e65f797e4a9a9fe500();
  });
}
