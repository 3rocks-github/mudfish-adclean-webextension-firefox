
function mudfish_adclean_6b826a281954f8164b83d330900c2c1c() {
  try {
    Sizzle(`.articleView + .aside .smallbox:has(iframe[src^="/view/ad/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6b826a281954f8164b83d330900c2c1c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6b826a281954f8164b83d330900c2c1c, function (items) {
  if (mudfish_adclean_g_conf_6b826a281954f8164b83d330900c2c1c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6b826a281954f8164b83d330900c2c1c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
