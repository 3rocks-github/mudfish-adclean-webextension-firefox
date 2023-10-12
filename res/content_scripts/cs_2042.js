
function mudfish_adclean_5ff9e45ddd9b9724be30829ad5f92911() {
  try {
    Sizzle(`#ti3`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5ff9e45ddd9b9724be30829ad5f92911 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5ff9e45ddd9b9724be30829ad5f92911, function (items) {
  if (mudfish_adclean_g_conf_5ff9e45ddd9b9724be30829ad5f92911.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5ff9e45ddd9b9724be30829ad5f92911();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
