
function mudfish_adclean_c4af36326fdbcac1fc130573075770dd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.con_primary hr.skin_margin`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c4af36326fdbcac1fc130573075770dd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c4af36326fdbcac1fc130573075770dd();
  });
}
