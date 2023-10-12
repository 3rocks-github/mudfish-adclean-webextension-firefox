
function mudfish_adclean_57e4daa664a244f9492218b9a1acbb99() {
  try {
    Sizzle(`div[style^="width:"][class="adsbygoogle"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_57e4daa664a244f9492218b9a1acbb99 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_57e4daa664a244f9492218b9a1acbb99, function (items) {
  if (mudfish_adclean_g_conf_57e4daa664a244f9492218b9a1acbb99.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_57e4daa664a244f9492218b9a1acbb99();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
