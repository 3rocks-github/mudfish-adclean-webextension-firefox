
function mudfish_adclean_b5f20e96a56ad8ed2167528c96bcb5cd() {
  try {
    Sizzle(`.news-view-wrap`).forEach(element => {
      element.style.paddingTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b5f20e96a56ad8ed2167528c96bcb5cd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b5f20e96a56ad8ed2167528c96bcb5cd, function (items) {
  if (mudfish_adclean_g_conf_b5f20e96a56ad8ed2167528c96bcb5cd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b5f20e96a56ad8ed2167528c96bcb5cd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b5f20e96a56ad8ed2167528c96bcb5cd();
    });
  }
});
