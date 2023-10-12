
function mudfish_adclean_672104b392bdee7a5f1e98ae4bcb3a6e() {
  try {
    Sizzle(`#banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_672104b392bdee7a5f1e98ae4bcb3a6e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_672104b392bdee7a5f1e98ae4bcb3a6e, function (items) {
  if (mudfish_adclean_g_conf_672104b392bdee7a5f1e98ae4bcb3a6e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_672104b392bdee7a5f1e98ae4bcb3a6e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
