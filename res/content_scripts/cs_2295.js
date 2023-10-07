
function mudfish_adclean_6b51e9dbb2f478bc5b75407398e47acc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.contentBox > .topNews .icon-list`).forEach(element => {
        element.style.borderTop = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6b51e9dbb2f478bc5b75407398e47acc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6b51e9dbb2f478bc5b75407398e47acc();
  });
}
