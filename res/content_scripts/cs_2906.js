
function mudfish_adclean_0f183837c17cd331869ac4351ca474f5() {
  try {
    Sizzle(`.article-adCover-div`).forEach(element => {
      element.style.height = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0f183837c17cd331869ac4351ca474f5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0f183837c17cd331869ac4351ca474f5, function (items) {
  if (mudfish_adclean_g_conf_0f183837c17cd331869ac4351ca474f5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0f183837c17cd331869ac4351ca474f5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0f183837c17cd331869ac4351ca474f5();
    });
  }
});
