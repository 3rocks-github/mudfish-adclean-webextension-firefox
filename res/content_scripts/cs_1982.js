
function mudfish_adclean_25b037c2677c9e866c33d04f7af5de5d() {
  try {
    Sizzle(`iframe[src="/common/inc/main_right_banner.asp"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_25b037c2677c9e866c33d04f7af5de5d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_25b037c2677c9e866c33d04f7af5de5d, function (items) {
  if (mudfish_adclean_g_conf_25b037c2677c9e866c33d04f7af5de5d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_25b037c2677c9e866c33d04f7af5de5d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
