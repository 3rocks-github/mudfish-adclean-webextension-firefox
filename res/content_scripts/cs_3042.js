
function mudfish_adclean_d4ec036444107a775dea53b02fb3874f() {
  try {
    Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_3`).forEach(element => {
      element.style.width = "239px !important";
element.style.left = "478px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d4ec036444107a775dea53b02fb3874f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d4ec036444107a775dea53b02fb3874f, function (items) {
  if (mudfish_adclean_g_conf_d4ec036444107a775dea53b02fb3874f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d4ec036444107a775dea53b02fb3874f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
