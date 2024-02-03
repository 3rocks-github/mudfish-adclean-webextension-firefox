
function mudfish_adclean_ad0677aeda0501322a9d972a9713bac7() {
  try {
    Sizzle(`.basic-banner.row.row-10`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ad0677aeda0501322a9d972a9713bac7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ad0677aeda0501322a9d972a9713bac7, function (items) {
  if (mudfish_adclean_g_conf_ad0677aeda0501322a9d972a9713bac7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ad0677aeda0501322a9d972a9713bac7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ad0677aeda0501322a9d972a9713bac7();
    });
  }
});
