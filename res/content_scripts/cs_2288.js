
function mudfish_adclean_bb4ee26a1428c58b4bfb391d0ecb47a2() {
  try {
    Sizzle(`div[class^="premium-lawyer"] ~ a.goto-all-lawyers`).forEach(element => {
      element.style.marginTop = "40px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb4ee26a1428c58b4bfb391d0ecb47a2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb4ee26a1428c58b4bfb391d0ecb47a2, function (items) {
  if (mudfish_adclean_g_conf_bb4ee26a1428c58b4bfb391d0ecb47a2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb4ee26a1428c58b4bfb391d0ecb47a2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bb4ee26a1428c58b4bfb391d0ecb47a2();
    });
  }
});
