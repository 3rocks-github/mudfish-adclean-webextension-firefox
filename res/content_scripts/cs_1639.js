
function mudfish_adclean_ab2fd07dbf47beb3c9ca8562635050d3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.module.module_plugin a[href*="//coinone.co.kr/user/signup?ref="]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ab2fd07dbf47beb3c9ca8562635050d3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ab2fd07dbf47beb3c9ca8562635050d3();
  });
}
