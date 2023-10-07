
function mudfish_adclean_3e3c24e2c6e1e0b31d988d22cbf25233() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.cate-search-result > #powerPlus`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3e3c24e2c6e1e0b31d988d22cbf25233();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3e3c24e2c6e1e0b31d988d22cbf25233();
  });
}
