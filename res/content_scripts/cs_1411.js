
function mudfish_adclean_0abf75714eaaf97785ebe465f665af18() {
  try {
    Sizzle(`#TopAddFrame`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0abf75714eaaf97785ebe465f665af18 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0abf75714eaaf97785ebe465f665af18, function (items) {
  if (mudfish_adclean_g_conf_0abf75714eaaf97785ebe465f665af18.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0abf75714eaaf97785ebe465f665af18();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
