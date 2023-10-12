
function mudfish_adclean_464961f80d16e52aad3fc498468ecc66() {
  try {
    Sizzle(`.today_sportnews`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_464961f80d16e52aad3fc498468ecc66 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_464961f80d16e52aad3fc498468ecc66, function (items) {
  if (mudfish_adclean_g_conf_464961f80d16e52aad3fc498468ecc66.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_464961f80d16e52aad3fc498468ecc66();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
