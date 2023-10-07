
function mudfish_adclean_44ccc227253534a006ee1049d666bb57() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.mod-top > .main-promo`).forEach(element => {
        element.style.marginLeft = "calc(50% - 205px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_44ccc227253534a006ee1049d666bb57();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_44ccc227253534a006ee1049d666bb57();
  });
}
