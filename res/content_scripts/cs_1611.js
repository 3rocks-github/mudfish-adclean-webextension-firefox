
function mudfish_adclean_934b75f6e69816739fb5e636343bb924() {
  try {
    Sizzle(`div[itemprop="articleBody"] > div[class][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_934b75f6e69816739fb5e636343bb924 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_934b75f6e69816739fb5e636343bb924, function (items) {
  if (mudfish_adclean_g_conf_934b75f6e69816739fb5e636343bb924.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_934b75f6e69816739fb5e636343bb924();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
