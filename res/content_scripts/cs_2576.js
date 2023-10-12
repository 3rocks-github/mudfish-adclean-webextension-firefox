
function mudfish_adclean_76a62366df6f3b824fef69094525e036() {
  try {
    Sizzle(`.topbar-area:has(> .badge:contains(뉴스))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_76a62366df6f3b824fef69094525e036 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_76a62366df6f3b824fef69094525e036, function (items) {
  if (mudfish_adclean_g_conf_76a62366df6f3b824fef69094525e036.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_76a62366df6f3b824fef69094525e036();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
