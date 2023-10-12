
function mudfish_adclean_addb18bf0dae31b6428ffba501a6a0a0() {
  try {
    Sizzle(`table:has(> tbody > tr > td:contains(bannerManager):not(:has(> *)))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_addb18bf0dae31b6428ffba501a6a0a0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_addb18bf0dae31b6428ffba501a6a0a0, function (items) {
  if (mudfish_adclean_g_conf_addb18bf0dae31b6428ffba501a6a0a0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_addb18bf0dae31b6428ffba501a6a0a0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
