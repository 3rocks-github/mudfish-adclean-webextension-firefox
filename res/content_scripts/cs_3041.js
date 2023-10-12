
function mudfish_adclean_81d698403662ccc92907151e794ffdf2() {
  try {
    Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_2`).forEach(element => {
      element.style.width = "239px !important";
element.style.left = "239px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_81d698403662ccc92907151e794ffdf2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_81d698403662ccc92907151e794ffdf2, function (items) {
  if (mudfish_adclean_g_conf_81d698403662ccc92907151e794ffdf2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_81d698403662ccc92907151e794ffdf2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
