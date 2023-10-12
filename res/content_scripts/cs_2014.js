
function mudfish_adclean_d2d683615e2e9336266bb541255a3ecb() {
  try {
    Sizzle(`.addot-wrapper`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d2d683615e2e9336266bb541255a3ecb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d2d683615e2e9336266bb541255a3ecb, function (items) {
  if (mudfish_adclean_g_conf_d2d683615e2e9336266bb541255a3ecb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d2d683615e2e9336266bb541255a3ecb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
