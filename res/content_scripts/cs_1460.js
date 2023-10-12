
function mudfish_adclean_00cf7d034e0286be0deff9dad90d308b() {
  try {
    Sizzle(`aside.user-aside div[data-direction]#side-scroll-in > .float-center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_00cf7d034e0286be0deff9dad90d308b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_00cf7d034e0286be0deff9dad90d308b, function (items) {
  if (mudfish_adclean_g_conf_00cf7d034e0286be0deff9dad90d308b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_00cf7d034e0286be0deff9dad90d308b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
