
function mudfish_adclean_5d471d6f429ca460b6581017e722bf2c() {
  try {
    Sizzle(`iframe[src^="//ad"][src*=".thisisgame.com/ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5d471d6f429ca460b6581017e722bf2c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5d471d6f429ca460b6581017e722bf2c, function (items) {
  if (mudfish_adclean_g_conf_5d471d6f429ca460b6581017e722bf2c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5d471d6f429ca460b6581017e722bf2c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
