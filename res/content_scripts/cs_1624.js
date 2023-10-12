
function mudfish_adclean_1314674b518f2644593105f46e34a542() {
  try {
    Sizzle(`#index > div[class^="box_shadow_"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1314674b518f2644593105f46e34a542 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1314674b518f2644593105f46e34a542, function (items) {
  if (mudfish_adclean_g_conf_1314674b518f2644593105f46e34a542.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1314674b518f2644593105f46e34a542();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
