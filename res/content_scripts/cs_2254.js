
function mudfish_adclean_f5afb4c777fa604448c30caa36e8d691() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#wrap_cnts td[valign="top"] #wrap_ctgr_new`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f5afb4c777fa604448c30caa36e8d691();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f5afb4c777fa604448c30caa36e8d691();
  });
}
