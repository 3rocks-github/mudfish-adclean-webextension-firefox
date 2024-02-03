
function mudfish_adclean_41bf14e552ddcf9bdd315bbe3b261cdf() {
  try {
    Sizzle(`.news-view-wrap`).forEach(element => {
      element.style.paddingTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_41bf14e552ddcf9bdd315bbe3b261cdf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_41bf14e552ddcf9bdd315bbe3b261cdf, function (items) {
  if (mudfish_adclean_g_conf_41bf14e552ddcf9bdd315bbe3b261cdf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_41bf14e552ddcf9bdd315bbe3b261cdf();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_41bf14e552ddcf9bdd315bbe3b261cdf();
    });
  }
});
