
function mudfish_adclean_31465c74f8fd6820a2848ff3d37091cd() {
  try {
    Sizzle(`div[class$="_ad"][style] + .h20`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_31465c74f8fd6820a2848ff3d37091cd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_31465c74f8fd6820a2848ff3d37091cd, function (items) {
  if (mudfish_adclean_g_conf_31465c74f8fd6820a2848ff3d37091cd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_31465c74f8fd6820a2848ff3d37091cd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
