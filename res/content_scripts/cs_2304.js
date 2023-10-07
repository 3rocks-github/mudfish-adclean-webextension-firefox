
function mudfish_adclean_2d990eff8da7c2349ca5c8e42fbed841() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wide_layout .wrap_srch_res .wrap_sort`).forEach(element => {
        element.style.width = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2d990eff8da7c2349ca5c8e42fbed841();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2d990eff8da7c2349ca5c8e42fbed841();
  });
}
