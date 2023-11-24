
function mudfish_adclean_9d0b6cb8ab7268b6076f0a3c9517edfc() {
  try {
    Sizzle(`.article_view > div[style$="overflow:hidden"].img_center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9d0b6cb8ab7268b6076f0a3c9517edfc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9d0b6cb8ab7268b6076f0a3c9517edfc, function (items) {
  if (mudfish_adclean_g_conf_9d0b6cb8ab7268b6076f0a3c9517edfc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9d0b6cb8ab7268b6076f0a3c9517edfc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9d0b6cb8ab7268b6076f0a3c9517edfc();
    });
  }
});
