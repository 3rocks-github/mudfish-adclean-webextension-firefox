
function mudfish_adclean_dbe0f0916ad8c2c2698444d04618ccd0() {
  try {
    Sizzle(`#scm_premium_spon_block`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dbe0f0916ad8c2c2698444d04618ccd0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dbe0f0916ad8c2c2698444d04618ccd0, function (items) {
  if (mudfish_adclean_g_conf_dbe0f0916ad8c2c2698444d04618ccd0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dbe0f0916ad8c2c2698444d04618ccd0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
