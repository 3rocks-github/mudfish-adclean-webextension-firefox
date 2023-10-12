
function mudfish_adclean_ddf8c4a4be06273c07423a592cdd74dd() {
  try {
    Sizzle(`div[class*="senkawa"] div[class] > div[id]:not([class]):contains(/^(|[​\n\t ]+)$/)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ddf8c4a4be06273c07423a592cdd74dd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ddf8c4a4be06273c07423a592cdd74dd, function (items) {
  if (mudfish_adclean_g_conf_ddf8c4a4be06273c07423a592cdd74dd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ddf8c4a4be06273c07423a592cdd74dd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
