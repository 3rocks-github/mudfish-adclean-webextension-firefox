
function mudfish_adclean_82f98d246b30b5ded40bfac82b0c6193() {
  try {
    Sizzle(`#sticky_variable_area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_82f98d246b30b5ded40bfac82b0c6193 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_82f98d246b30b5ded40bfac82b0c6193, function (items) {
  if (mudfish_adclean_g_conf_82f98d246b30b5ded40bfac82b0c6193.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_82f98d246b30b5ded40bfac82b0c6193();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_82f98d246b30b5ded40bfac82b0c6193();
    });
  }
});
