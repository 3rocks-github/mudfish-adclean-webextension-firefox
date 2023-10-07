
function mudfish_adclean_aa60d22ef4763a6fb236c5abc2eff4d8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`tr:has(> td > a[href^="../ad_board/"]:contains(광고))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_aa60d22ef4763a6fb236c5abc2eff4d8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_aa60d22ef4763a6fb236c5abc2eff4d8();
  });
}
