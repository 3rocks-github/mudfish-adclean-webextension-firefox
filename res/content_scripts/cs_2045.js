
function mudfish_adclean_dbe0f0916ad8c2c2698444d04618ccd0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#scm_premium_spon_block`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_dbe0f0916ad8c2c2698444d04618ccd0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_dbe0f0916ad8c2c2698444d04618ccd0();
  });
}
