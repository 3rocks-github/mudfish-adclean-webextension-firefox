
function mudfish_adclean_f74ec79109ac332c757d7f9272bea735() {
  try {
    Sizzle(`.banner_slot_top + #container .article_cover`).forEach(element => {
      element.style.top = "100px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f74ec79109ac332c757d7f9272bea735 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f74ec79109ac332c757d7f9272bea735, function (items) {
  if (mudfish_adclean_g_conf_f74ec79109ac332c757d7f9272bea735.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f74ec79109ac332c757d7f9272bea735();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f74ec79109ac332c757d7f9272bea735();
    });
  }
});
