
function mudfish_adclean_cbdc8aa79c918780f8b755bb26deea32() {
  try {
    Sizzle(`iframe[src="https://filetender.com/mobon.html"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cbdc8aa79c918780f8b755bb26deea32 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cbdc8aa79c918780f8b755bb26deea32, function (items) {
  if (mudfish_adclean_g_conf_cbdc8aa79c918780f8b755bb26deea32.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cbdc8aa79c918780f8b755bb26deea32();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
