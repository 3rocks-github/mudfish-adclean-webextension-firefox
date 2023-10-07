
function mudfish_adclean_9b1294148188e08f0c5080aae0685431() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="aside_aside_"] div[class^="basicView_recommend_brand_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9b1294148188e08f0c5080aae0685431();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9b1294148188e08f0c5080aae0685431();
  });
}
