
function mudfish_adclean_047230f717cd160c4b57a0ee1fdb8b8b() {
  try {
    Sizzle(`main#main .eq.section > div[class$=" "][style^="background-position"] ~ div[style^="float: "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_047230f717cd160c4b57a0ee1fdb8b8b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_047230f717cd160c4b57a0ee1fdb8b8b, function (items) {
  if (mudfish_adclean_g_conf_047230f717cd160c4b57a0ee1fdb8b8b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_047230f717cd160c4b57a0ee1fdb8b8b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
