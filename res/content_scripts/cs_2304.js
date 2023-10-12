
function mudfish_adclean_2d990eff8da7c2349ca5c8e42fbed841() {
  try {
    Sizzle(`.wide_layout .wrap_srch_res .wrap_sort`).forEach(element => {
      element.style.width = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d990eff8da7c2349ca5c8e42fbed841 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d990eff8da7c2349ca5c8e42fbed841, function (items) {
  if (mudfish_adclean_g_conf_2d990eff8da7c2349ca5c8e42fbed841.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d990eff8da7c2349ca5c8e42fbed841();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
