
function mudfish_adclean_d7403fe18416028ccf17dc9c561fd67b() {
  try {
    Sizzle(`#viewConts div[style][id^="articleBody"] + p ~ center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d7403fe18416028ccf17dc9c561fd67b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d7403fe18416028ccf17dc9c561fd67b, function (items) {
  if (mudfish_adclean_g_conf_d7403fe18416028ccf17dc9c561fd67b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d7403fe18416028ccf17dc9c561fd67b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
