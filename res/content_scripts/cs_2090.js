
function mudfish_adclean_3d30b2bd1171899186fbb8c2ae262333() {
  try {
    Sizzle(`div#close_mask`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3d30b2bd1171899186fbb8c2ae262333 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3d30b2bd1171899186fbb8c2ae262333, function (items) {
  if (mudfish_adclean_g_conf_3d30b2bd1171899186fbb8c2ae262333.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3d30b2bd1171899186fbb8c2ae262333();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
