
function mudfish_adclean_c9a461a045625a0a718679ee8e04d031() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.byWd div[id^="bl_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c9a461a045625a0a718679ee8e04d031();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c9a461a045625a0a718679ee8e04d031();
  });
}
