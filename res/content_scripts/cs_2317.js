
function mudfish_adclean_d24a742979f812d49b83f98fe7740b1b() {
  try {
    Sizzle(`#index > div[id^="index_box"][class]:not(.index_row_full)`).forEach(element => {
      element.style.marginLeft = "calc(50% - 145.5px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d24a742979f812d49b83f98fe7740b1b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d24a742979f812d49b83f98fe7740b1b, function (items) {
  if (mudfish_adclean_g_conf_d24a742979f812d49b83f98fe7740b1b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d24a742979f812d49b83f98fe7740b1b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
