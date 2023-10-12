
function mudfish_adclean_80fd7dcedafc727c670386a6fc5cde2e() {
  try {
    Sizzle(`.menu-ul > .menu-li:has(> a:contains(보증토토))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_80fd7dcedafc727c670386a6fc5cde2e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_80fd7dcedafc727c670386a6fc5cde2e, function (items) {
  if (mudfish_adclean_g_conf_80fd7dcedafc727c670386a6fc5cde2e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_80fd7dcedafc727c670386a6fc5cde2e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
