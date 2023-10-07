
function mudfish_adclean_5dc6aa5cc03e8695f6ff6fff059aa186() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content > ul.ad_area`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5dc6aa5cc03e8695f6ff6fff059aa186();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5dc6aa5cc03e8695f6ff6fff059aa186();
  });
}
