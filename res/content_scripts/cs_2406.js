
function mudfish_adclean_204fae1b8e234e8200442a1e99fa40b4() {
  try {
    Sizzle(`.tbl_wrap .bo_notice:has(span[class^="spon_b_icon"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_204fae1b8e234e8200442a1e99fa40b4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_204fae1b8e234e8200442a1e99fa40b4, function (items) {
  if (mudfish_adclean_g_conf_204fae1b8e234e8200442a1e99fa40b4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_204fae1b8e234e8200442a1e99fa40b4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
