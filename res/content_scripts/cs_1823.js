
function mudfish_adclean_076a17a937fd665a35eb1dc9ea99fa36() {
  try {
    Sizzle(`div[class$="_banners"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_076a17a937fd665a35eb1dc9ea99fa36 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_076a17a937fd665a35eb1dc9ea99fa36, function (items) {
  if (mudfish_adclean_g_conf_076a17a937fd665a35eb1dc9ea99fa36.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_076a17a937fd665a35eb1dc9ea99fa36();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
