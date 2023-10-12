
function mudfish_adclean_4e5fc1ec8fb4b1f58608fa4f5663d1bd() {
  try {
    Sizzle(`iframe[id^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4e5fc1ec8fb4b1f58608fa4f5663d1bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4e5fc1ec8fb4b1f58608fa4f5663d1bd, function (items) {
  if (mudfish_adclean_g_conf_4e5fc1ec8fb4b1f58608fa4f5663d1bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4e5fc1ec8fb4b1f58608fa4f5663d1bd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
