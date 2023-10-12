
function mudfish_adclean_0ea694c24e8cc198614a738a748a1bb9() {
  try {
    Sizzle(`#wrap_index ~ div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0ea694c24e8cc198614a738a748a1bb9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0ea694c24e8cc198614a738a748a1bb9, function (items) {
  if (mudfish_adclean_g_conf_0ea694c24e8cc198614a738a748a1bb9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0ea694c24e8cc198614a738a748a1bb9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
