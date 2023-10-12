
function mudfish_adclean_5bf0a9c45bddff751b8d24fe671d97c9() {
  try {
    Sizzle(`ins[data-aiinad-inv] + .bk40`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5bf0a9c45bddff751b8d24fe671d97c9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5bf0a9c45bddff751b8d24fe671d97c9, function (items) {
  if (mudfish_adclean_g_conf_5bf0a9c45bddff751b8d24fe671d97c9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5bf0a9c45bddff751b8d24fe671d97c9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
