
function mudfish_adclean_d6533f168c92b4845aad556f88a1b25b() {
  try {
    Sizzle(`ul[id*="_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d6533f168c92b4845aad556f88a1b25b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d6533f168c92b4845aad556f88a1b25b, function (items) {
  if (mudfish_adclean_g_conf_d6533f168c92b4845aad556f88a1b25b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d6533f168c92b4845aad556f88a1b25b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
