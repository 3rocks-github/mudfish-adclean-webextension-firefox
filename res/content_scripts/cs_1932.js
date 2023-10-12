
function mudfish_adclean_db71ae1f9b94f383a2707d29afa3f430() {
  try {
    Sizzle(`.AdvertisingList`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_db71ae1f9b94f383a2707d29afa3f430 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_db71ae1f9b94f383a2707d29afa3f430, function (items) {
  if (mudfish_adclean_g_conf_db71ae1f9b94f383a2707d29afa3f430.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_db71ae1f9b94f383a2707d29afa3f430();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
