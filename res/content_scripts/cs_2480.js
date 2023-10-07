
function mudfish_adclean_6b826a281954f8164b83d330900c2c1c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.articleView + .aside .smallbox:has(iframe[src^="/view/ad/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6b826a281954f8164b83d330900c2c1c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6b826a281954f8164b83d330900c2c1c();
  });
}
