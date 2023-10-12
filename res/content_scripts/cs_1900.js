
function mudfish_adclean_318b9c3274d340c7136fa41f56b63653() {
  try {
    Sizzle(`div[id^="mobitree"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_318b9c3274d340c7136fa41f56b63653 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_318b9c3274d340c7136fa41f56b63653, function (items) {
  if (mudfish_adclean_g_conf_318b9c3274d340c7136fa41f56b63653.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_318b9c3274d340c7136fa41f56b63653();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
