
function mudfish_adclean_69426645aee4b8e77a1ffa0e8d54e4f5() {
  try {
    Sizzle(`div[id^="toptr-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_69426645aee4b8e77a1ffa0e8d54e4f5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_69426645aee4b8e77a1ffa0e8d54e4f5, function (items) {
  if (mudfish_adclean_g_conf_69426645aee4b8e77a1ffa0e8d54e4f5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_69426645aee4b8e77a1ffa0e8d54e4f5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
