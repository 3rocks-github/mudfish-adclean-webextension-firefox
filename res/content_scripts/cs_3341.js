
function mudfish_adclean_ef4612c2137928001311a1ae741950af() {
  try {
    Sizzle(`table#revolution_main_table tr[class^="common-list"]:has(table a[href*="?id=pmarket&"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ef4612c2137928001311a1ae741950af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ef4612c2137928001311a1ae741950af, function (items) {
  if (mudfish_adclean_g_conf_ef4612c2137928001311a1ae741950af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ef4612c2137928001311a1ae741950af();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ef4612c2137928001311a1ae741950af();
    });
  }
});
