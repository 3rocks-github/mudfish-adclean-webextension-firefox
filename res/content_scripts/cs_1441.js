
function mudfish_adclean_5f911e0a901993ab9a047489ccc88bfd() {
  try {
    Sizzle(`.cate-search-result > #plusItem`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5f911e0a901993ab9a047489ccc88bfd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5f911e0a901993ab9a047489ccc88bfd, function (items) {
  if (mudfish_adclean_g_conf_5f911e0a901993ab9a047489ccc88bfd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5f911e0a901993ab9a047489ccc88bfd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5f911e0a901993ab9a047489ccc88bfd();
    });
  }
});
