
function mudfish_adclean_79ad356a8aa868a2e2dfbddf7f63782f() {
  try {
    Sizzle(`a[href*="/bbs/link.php?bo_table=partner&"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_79ad356a8aa868a2e2dfbddf7f63782f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_79ad356a8aa868a2e2dfbddf7f63782f, function (items) {
  if (mudfish_adclean_g_conf_79ad356a8aa868a2e2dfbddf7f63782f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_79ad356a8aa868a2e2dfbddf7f63782f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
