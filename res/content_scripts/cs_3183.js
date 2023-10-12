
function mudfish_adclean_6bc7c9e9ebc216c738b62ece43b50cfb() {
  try {
    Sizzle(`.comic_bot_bnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6bc7c9e9ebc216c738b62ece43b50cfb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6bc7c9e9ebc216c738b62ece43b50cfb, function (items) {
  if (mudfish_adclean_g_conf_6bc7c9e9ebc216c738b62ece43b50cfb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6bc7c9e9ebc216c738b62ece43b50cfb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
