
function mudfish_adclean_7c53a35407fe96fdd83942cce567d8aa() {
  try {
    Sizzle(`div[id^="bidrich-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7c53a35407fe96fdd83942cce567d8aa = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7c53a35407fe96fdd83942cce567d8aa, function (items) {
  if (mudfish_adclean_g_conf_7c53a35407fe96fdd83942cce567d8aa.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7c53a35407fe96fdd83942cce567d8aa();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
