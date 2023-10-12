
function mudfish_adclean_84e91558646d9681563b06915d49b384() {
  try {
    Sizzle(`div:not([class$="-mobile"]) > div[class]:has(> [class*="_ad_"]):not([data-review-count])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_84e91558646d9681563b06915d49b384 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_84e91558646d9681563b06915d49b384, function (items) {
  if (mudfish_adclean_g_conf_84e91558646d9681563b06915d49b384.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_84e91558646d9681563b06915d49b384();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
