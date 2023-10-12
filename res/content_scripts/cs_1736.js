
function mudfish_adclean_778bd7516ed6bafc93f8bbc14a967898() {
  try {
    Sizzle(`aside#sidebar > div[id^="text-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_778bd7516ed6bafc93f8bbc14a967898 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_778bd7516ed6bafc93f8bbc14a967898, function (items) {
  if (mudfish_adclean_g_conf_778bd7516ed6bafc93f8bbc14a967898.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_778bd7516ed6bafc93f8bbc14a967898();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
