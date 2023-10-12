
function mudfish_adclean_32be0c5f996b4bf62980374d66ba1a78() {
  try {
    Sizzle(`#Suggestion .newServices`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_32be0c5f996b4bf62980374d66ba1a78 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_32be0c5f996b4bf62980374d66ba1a78, function (items) {
  if (mudfish_adclean_g_conf_32be0c5f996b4bf62980374d66ba1a78.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_32be0c5f996b4bf62980374d66ba1a78();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
