
function mudfish_adclean_35b636648421929d25e58215006c2a60() {
  try {
    Sizzle(`div[itemprop="articleBody"].article_info > div[id^="slot"][style^="text-align:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_35b636648421929d25e58215006c2a60 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_35b636648421929d25e58215006c2a60, function (items) {
  if (mudfish_adclean_g_conf_35b636648421929d25e58215006c2a60.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_35b636648421929d25e58215006c2a60();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
