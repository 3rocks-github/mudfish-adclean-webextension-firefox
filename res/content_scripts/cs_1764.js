
function mudfish_adclean_5d66dfa59bda8139a36622ea5b4ec3a9() {
  try {
    Sizzle(`#content > div[style^="background:"][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5d66dfa59bda8139a36622ea5b4ec3a9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5d66dfa59bda8139a36622ea5b4ec3a9, function (items) {
  if (mudfish_adclean_g_conf_5d66dfa59bda8139a36622ea5b4ec3a9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5d66dfa59bda8139a36622ea5b4ec3a9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5d66dfa59bda8139a36622ea5b4ec3a9();
    });
  }
});
