
function mudfish_adclean_72793f9a0667e84e9964b722bd487774() {
  try {
    Sizzle(`div[class*="_bn_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_72793f9a0667e84e9964b722bd487774 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_72793f9a0667e84e9964b722bd487774, function (items) {
  if (mudfish_adclean_g_conf_72793f9a0667e84e9964b722bd487774.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_72793f9a0667e84e9964b722bd487774();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
