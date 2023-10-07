
function mudfish_adclean_cff8afd22b9d4e208c13b9d5146684b1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.detail-top-lst li:has(a[href*="//addc.dcinside.com/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_cff8afd22b9d4e208c13b9d5146684b1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_cff8afd22b9d4e208c13b9d5146684b1();
  });
}
