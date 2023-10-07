
function mudfish_adclean_6f7a50065892e76ee64ef6bf8326ebae() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.adLinkColl`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6f7a50065892e76ee64ef6bf8326ebae();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6f7a50065892e76ee64ef6bf8326ebae();
  });
}
