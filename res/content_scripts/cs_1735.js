
function mudfish_adclean_a24eb93eda14f7ac2d62b7104eb0dc97() {
  try {
    Sizzle(`.thecontent > .in-article-container`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a24eb93eda14f7ac2d62b7104eb0dc97 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a24eb93eda14f7ac2d62b7104eb0dc97, function (items) {
  if (mudfish_adclean_g_conf_a24eb93eda14f7ac2d62b7104eb0dc97.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a24eb93eda14f7ac2d62b7104eb0dc97();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a24eb93eda14f7ac2d62b7104eb0dc97();
    });
  }
});
