
function mudfish_adclean_f5afb4c777fa604448c30caa36e8d691() {
  try {
    Sizzle(`#wrap_cnts td[valign="top"] #wrap_ctgr_new`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f5afb4c777fa604448c30caa36e8d691 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f5afb4c777fa604448c30caa36e8d691, function (items) {
  if (mudfish_adclean_g_conf_f5afb4c777fa604448c30caa36e8d691.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f5afb4c777fa604448c30caa36e8d691();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
