
function mudfish_adclean_3c108434d4573e703d1b19e3514b9f1a() {
  try {
    Sizzle(`div[class^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3c108434d4573e703d1b19e3514b9f1a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3c108434d4573e703d1b19e3514b9f1a, function (items) {
  if (mudfish_adclean_g_conf_3c108434d4573e703d1b19e3514b9f1a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3c108434d4573e703d1b19e3514b9f1a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
