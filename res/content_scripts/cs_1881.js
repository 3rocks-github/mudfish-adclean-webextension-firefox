
function mudfish_adclean_c74d9d7736d03f0360b6b5875923005a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.box_shopping`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c74d9d7736d03f0360b6b5875923005a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c74d9d7736d03f0360b6b5875923005a();
  });
}
