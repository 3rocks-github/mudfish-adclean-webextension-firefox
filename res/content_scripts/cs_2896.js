
function mudfish_adclean_295a05202a07c745ffb3d940a0bf8566() {
  try {
    Sizzle(`.e17e77tq6`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_295a05202a07c745ffb3d940a0bf8566 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_295a05202a07c745ffb3d940a0bf8566, function (items) {
  if (mudfish_adclean_g_conf_295a05202a07c745ffb3d940a0bf8566.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_295a05202a07c745ffb3d940a0bf8566();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
