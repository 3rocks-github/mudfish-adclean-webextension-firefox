
function mudfish_adclean_4ce8e53ebe07f27feb1521a4c8b9e5c9() {
  try {
    Sizzle(`#searchArea .title_wrap`).forEach(element => {
      element.style.width = "calc(100% - 50px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4ce8e53ebe07f27feb1521a4c8b9e5c9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4ce8e53ebe07f27feb1521a4c8b9e5c9, function (items) {
  if (mudfish_adclean_g_conf_4ce8e53ebe07f27feb1521a4c8b9e5c9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4ce8e53ebe07f27feb1521a4c8b9e5c9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
