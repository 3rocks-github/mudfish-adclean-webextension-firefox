
function mudfish_adclean_a05194b82c861ba4d9d8125ff0c9444d() {
  try {
    Sizzle(`#no_pages.bg_w`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a05194b82c861ba4d9d8125ff0c9444d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a05194b82c861ba4d9d8125ff0c9444d, function (items) {
  if (mudfish_adclean_g_conf_a05194b82c861ba4d9d8125ff0c9444d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a05194b82c861ba4d9d8125ff0c9444d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
