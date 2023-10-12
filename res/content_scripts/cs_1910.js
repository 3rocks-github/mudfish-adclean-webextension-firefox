
function mudfish_adclean_ea4f346f503dfe410988c5b374ae984a() {
  try {
    Sizzle(`section > div[class^="listStyle"] > ul[class^="listStyle"] > li.first`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ea4f346f503dfe410988c5b374ae984a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ea4f346f503dfe410988c5b374ae984a, function (items) {
  if (mudfish_adclean_g_conf_ea4f346f503dfe410988c5b374ae984a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ea4f346f503dfe410988c5b374ae984a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
