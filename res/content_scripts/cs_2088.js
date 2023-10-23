
function mudfish_adclean_fda8400b7d1f7e9801f92d272d9477dd() {
  try {
    Sizzle(`div.panel.class-event-wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fda8400b7d1f7e9801f92d272d9477dd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fda8400b7d1f7e9801f92d272d9477dd, function (items) {
  if (mudfish_adclean_g_conf_fda8400b7d1f7e9801f92d272d9477dd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fda8400b7d1f7e9801f92d272d9477dd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fda8400b7d1f7e9801f92d272d9477dd();
    });
  }
});
