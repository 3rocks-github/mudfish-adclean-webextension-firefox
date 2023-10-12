
function mudfish_adclean_7c8f71c7959aba252703c573023743e4() {
  try {
    Sizzle(`.googlead`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7c8f71c7959aba252703c573023743e4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7c8f71c7959aba252703c573023743e4, function (items) {
  if (mudfish_adclean_g_conf_7c8f71c7959aba252703c573023743e4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7c8f71c7959aba252703c573023743e4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
