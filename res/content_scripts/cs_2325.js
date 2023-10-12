
function mudfish_adclean_c600115af0a9d17ac400b2efafcdaacf() {
  try {
    Sizzle(`div[class^="ppom_newSub"] .top_newSub .left_wt`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c600115af0a9d17ac400b2efafcdaacf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c600115af0a9d17ac400b2efafcdaacf, function (items) {
  if (mudfish_adclean_g_conf_c600115af0a9d17ac400b2efafcdaacf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c600115af0a9d17ac400b2efafcdaacf();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
