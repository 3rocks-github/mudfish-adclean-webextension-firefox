
function mudfish_adclean_61f259d007db48b0f6578ab2fe475cba() {
  try {
    Sizzle(`div[id$="_Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_61f259d007db48b0f6578ab2fe475cba = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_61f259d007db48b0f6578ab2fe475cba, function (items) {
  if (mudfish_adclean_g_conf_61f259d007db48b0f6578ab2fe475cba.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_61f259d007db48b0f6578ab2fe475cba();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
