
function mudfish_adclean_ee6e09faf8960ee3ac1d13381d6bad56() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body > div[class*="_banner_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ee6e09faf8960ee3ac1d13381d6bad56();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ee6e09faf8960ee3ac1d13381d6bad56();
  });
}
