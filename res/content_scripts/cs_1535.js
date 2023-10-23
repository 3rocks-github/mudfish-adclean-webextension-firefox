
function mudfish_adclean_165d9aae072e0943a9719d19ace44263() {
  try {
    Sizzle(`.bnr_area a[target]:not([href*="//realty.chosun.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_165d9aae072e0943a9719d19ace44263 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_165d9aae072e0943a9719d19ace44263, function (items) {
  if (mudfish_adclean_g_conf_165d9aae072e0943a9719d19ace44263.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_165d9aae072e0943a9719d19ace44263();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_165d9aae072e0943a9719d19ace44263();
    });
  }
});
