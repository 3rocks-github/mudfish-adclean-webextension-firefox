
function mudfish_adclean_3f7a3ca9afa882535cdaa03879dbe414() {
  try {
    Sizzle(`article > div[class]:not([class*=" "]) ~ div[class*=" "]:has(> div[id][class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3f7a3ca9afa882535cdaa03879dbe414 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3f7a3ca9afa882535cdaa03879dbe414, function (items) {
  if (mudfish_adclean_g_conf_3f7a3ca9afa882535cdaa03879dbe414.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3f7a3ca9afa882535cdaa03879dbe414();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3f7a3ca9afa882535cdaa03879dbe414();
    });
  }
});
