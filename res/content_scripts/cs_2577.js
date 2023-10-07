
function mudfish_adclean_c6cf2e9c59a9416d8e517b981a48b00d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.app-board-section > ul.app-board-template-list > li.notice:has(> a[href] > span > font[color]:contains(AD))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c6cf2e9c59a9416d8e517b981a48b00d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c6cf2e9c59a9416d8e517b981a48b00d();
  });
}
