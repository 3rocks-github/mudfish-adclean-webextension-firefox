
function mudfish_adclean_b7f6f1426c74e05e31aea0159abceb5d() {
  try {
    Sizzle(`div[class^="RecommendationMobile_cardWrapper_"] > a[class^="MainBannerV2_container_"][data-promo-name]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b7f6f1426c74e05e31aea0159abceb5d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b7f6f1426c74e05e31aea0159abceb5d, function (items) {
  if (mudfish_adclean_g_conf_b7f6f1426c74e05e31aea0159abceb5d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b7f6f1426c74e05e31aea0159abceb5d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b7f6f1426c74e05e31aea0159abceb5d();
    });
  }
});
