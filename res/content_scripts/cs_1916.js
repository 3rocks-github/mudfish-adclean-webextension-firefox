
function mudfish_adclean_13bdd0189179b94282b2ffc6d88e36c5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.widget_banner_skin > ul.banner_list`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_13bdd0189179b94282b2ffc6d88e36c5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_13bdd0189179b94282b2ffc6d88e36c5();
  });
}
