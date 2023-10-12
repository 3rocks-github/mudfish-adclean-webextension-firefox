
function mudfish_adclean_97984b2a2b7f576788de2a2d62d463a6() {
  try {
    Sizzle(`.widget-side .widget-title:has(+ div a[href^="/bbs/link.php?bo_table="][target="_blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_97984b2a2b7f576788de2a2d62d463a6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_97984b2a2b7f576788de2a2d62d463a6, function (items) {
  if (mudfish_adclean_g_conf_97984b2a2b7f576788de2a2d62d463a6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_97984b2a2b7f576788de2a2d62d463a6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
