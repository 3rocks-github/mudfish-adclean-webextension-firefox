
function mudfish_adclean_ba89c26847b14a26f3fa5ccd40256350() {
  try {
    Sizzle(`#google_ads`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ba89c26847b14a26f3fa5ccd40256350 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ba89c26847b14a26f3fa5ccd40256350, function (items) {
  if (mudfish_adclean_g_conf_ba89c26847b14a26f3fa5ccd40256350.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ba89c26847b14a26f3fa5ccd40256350();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
