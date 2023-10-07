
function mudfish_adclean_a647a424475d2d5d75000bc1a3648119() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul > li:has(> a[href^="./ad_board/"]:contains(광고))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a647a424475d2d5d75000bc1a3648119();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a647a424475d2d5d75000bc1a3648119();
  });
}
