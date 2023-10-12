
function mudfish_adclean_84c8a74f9af938ddcbeb572eb8fc5c3e() {
  try {
    Sizzle(`div[class^="ad"] ~ .ranking`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_84c8a74f9af938ddcbeb572eb8fc5c3e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_84c8a74f9af938ddcbeb572eb8fc5c3e, function (items) {
  if (mudfish_adclean_g_conf_84c8a74f9af938ddcbeb572eb8fc5c3e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_84c8a74f9af938ddcbeb572eb8fc5c3e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
