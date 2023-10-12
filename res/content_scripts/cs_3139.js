
function mudfish_adclean_8676ab43e962b9263bfc83a9612cb3ec() {
  try {
    Sizzle(`#right-sidebar`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8676ab43e962b9263bfc83a9612cb3ec = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8676ab43e962b9263bfc83a9612cb3ec, function (items) {
  if (mudfish_adclean_g_conf_8676ab43e962b9263bfc83a9612cb3ec.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8676ab43e962b9263bfc83a9612cb3ec();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
