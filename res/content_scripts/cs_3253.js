
function mudfish_adclean_9767b0c26b4177ee81fa2b10a32e1ede() {
  try {
    Sizzle(`div[class$="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9767b0c26b4177ee81fa2b10a32e1ede = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9767b0c26b4177ee81fa2b10a32e1ede, function (items) {
  if (mudfish_adclean_g_conf_9767b0c26b4177ee81fa2b10a32e1ede.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9767b0c26b4177ee81fa2b10a32e1ede();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
