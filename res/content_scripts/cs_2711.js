
function mudfish_adclean_156f1b32d741a777a8eac3b6855a3483() {
  try {
    Sizzle(`#bo_v_top ~ section[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_156f1b32d741a777a8eac3b6855a3483 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_156f1b32d741a777a8eac3b6855a3483, function (items) {
  if (mudfish_adclean_g_conf_156f1b32d741a777a8eac3b6855a3483.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_156f1b32d741a777a8eac3b6855a3483();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
