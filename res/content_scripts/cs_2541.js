
function mudfish_adclean_64f0a092a80bdb7d891eb132bb3512e7() {
  try {
    Sizzle(`div[module-design-id] ~ div > .component:has(div:has(.text--smiledelivery_slogan)) .section--component_title`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_64f0a092a80bdb7d891eb132bb3512e7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_64f0a092a80bdb7d891eb132bb3512e7, function (items) {
  if (mudfish_adclean_g_conf_64f0a092a80bdb7d891eb132bb3512e7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_64f0a092a80bdb7d891eb132bb3512e7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
