
function mudfish_adclean_8c3cb828a1c96d71edb294a938c2abad() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body > div[align] > div[style*="overflow:hidden;"][align] > div > div[class] > a[href]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8c3cb828a1c96d71edb294a938c2abad();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8c3cb828a1c96d71edb294a938c2abad();
  });
}
