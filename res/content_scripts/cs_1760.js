
function mudfish_adclean_ff17503a1249831750ae6f80988afcc1() {
  try {
    Sizzle(`div[id*="_ad_"] ~ div[style^="min-height"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ff17503a1249831750ae6f80988afcc1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ff17503a1249831750ae6f80988afcc1, function (items) {
  if (mudfish_adclean_g_conf_ff17503a1249831750ae6f80988afcc1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ff17503a1249831750ae6f80988afcc1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ff17503a1249831750ae6f80988afcc1();
    });
  }
});
