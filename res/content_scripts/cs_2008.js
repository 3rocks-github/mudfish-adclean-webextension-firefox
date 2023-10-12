
function mudfish_adclean_1ba64d9aa5381454679aaad799103f5a() {
  try {
    Sizzle(`div.section-leftmiddle-bottommiddle.cf`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1ba64d9aa5381454679aaad799103f5a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1ba64d9aa5381454679aaad799103f5a, function (items) {
  if (mudfish_adclean_g_conf_1ba64d9aa5381454679aaad799103f5a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1ba64d9aa5381454679aaad799103f5a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
