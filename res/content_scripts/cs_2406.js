
function mudfish_adclean_204fae1b8e234e8200442a1e99fa40b4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.tbl_wrap .bo_notice:has(span[class^="spon_b_icon"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_204fae1b8e234e8200442a1e99fa40b4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_204fae1b8e234e8200442a1e99fa40b4();
  });
}
