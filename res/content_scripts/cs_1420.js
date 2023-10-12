
function mudfish_adclean_33aa23f80b9849c381e7d1e11456e29d() {
  try {
    Sizzle(`article table[align] td[height]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_33aa23f80b9849c381e7d1e11456e29d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_33aa23f80b9849c381e7d1e11456e29d, function (items) {
  if (mudfish_adclean_g_conf_33aa23f80b9849c381e7d1e11456e29d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_33aa23f80b9849c381e7d1e11456e29d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
