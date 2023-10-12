
function mudfish_adclean_a4d2170c93d4ff5760684a1bd1da000d() {
  try {
    Sizzle(`#contents #recomN.recomend_main`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a4d2170c93d4ff5760684a1bd1da000d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a4d2170c93d4ff5760684a1bd1da000d, function (items) {
  if (mudfish_adclean_g_conf_a4d2170c93d4ff5760684a1bd1da000d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a4d2170c93d4ff5760684a1bd1da000d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
