
function mudfish_adclean_41922d7bc79f0b1f6a4c4b2ebf19bec5() {
  try {
    Sizzle(`div[class*="-banner"] div[class*=" "][style=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_41922d7bc79f0b1f6a4c4b2ebf19bec5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_41922d7bc79f0b1f6a4c4b2ebf19bec5, function (items) {
  if (mudfish_adclean_g_conf_41922d7bc79f0b1f6a4c4b2ebf19bec5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_41922d7bc79f0b1f6a4c4b2ebf19bec5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
