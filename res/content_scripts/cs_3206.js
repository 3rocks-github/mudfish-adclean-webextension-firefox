
function mudfish_adclean_110cb2a9962bb821ec52f81b2a60021b() {
  try {
    Sizzle(`article[itemprop="articleBody"] > div[class]:has(div[role="alert"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_110cb2a9962bb821ec52f81b2a60021b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_110cb2a9962bb821ec52f81b2a60021b, function (items) {
  if (mudfish_adclean_g_conf_110cb2a9962bb821ec52f81b2a60021b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_110cb2a9962bb821ec52f81b2a60021b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
