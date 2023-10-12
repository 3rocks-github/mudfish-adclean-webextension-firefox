
function mudfish_adclean_1819d0bd54dab9fdbb4d7ab4f0b9915f() {
  try {
    Sizzle(`table table > tbody table[width][cellspacing][cellpadding].black > tbody td[height="90"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1819d0bd54dab9fdbb4d7ab4f0b9915f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1819d0bd54dab9fdbb4d7ab4f0b9915f, function (items) {
  if (mudfish_adclean_g_conf_1819d0bd54dab9fdbb4d7ab4f0b9915f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1819d0bd54dab9fdbb4d7ab4f0b9915f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
