
function mudfish_adclean_e0e4c07514ed63e324f4544803cd5b6d() {
  try {
    Sizzle(`article.layout__article-main > .box--pad-top-md`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e0e4c07514ed63e324f4544803cd5b6d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e0e4c07514ed63e324f4544803cd5b6d, function (items) {
  if (mudfish_adclean_g_conf_e0e4c07514ed63e324f4544803cd5b6d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e0e4c07514ed63e324f4544803cd5b6d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
