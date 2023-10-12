
function mudfish_adclean_76d8726169abc6bacbbcf7fb68812861() {
  try {
    Sizzle(`.article_area > .article_right`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_76d8726169abc6bacbbcf7fb68812861 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_76d8726169abc6bacbbcf7fb68812861, function (items) {
  if (mudfish_adclean_g_conf_76d8726169abc6bacbbcf7fb68812861.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_76d8726169abc6bacbbcf7fb68812861();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
