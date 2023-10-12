
function mudfish_adclean_f59daaaa3f1dd585b1b052d6de365ff6() {
  try {
    Sizzle(`main[role="main"] header ~ .code-block`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f59daaaa3f1dd585b1b052d6de365ff6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f59daaaa3f1dd585b1b052d6de365ff6, function (items) {
  if (mudfish_adclean_g_conf_f59daaaa3f1dd585b1b052d6de365ff6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f59daaaa3f1dd585b1b052d6de365ff6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
