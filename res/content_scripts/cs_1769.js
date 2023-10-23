
function mudfish_adclean_00b58b87b31b44db90f7ff5a1386ad96() {
  try {
    Sizzle(`iframe[src*="//ad.search.nate.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_00b58b87b31b44db90f7ff5a1386ad96 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_00b58b87b31b44db90f7ff5a1386ad96, function (items) {
  if (mudfish_adclean_g_conf_00b58b87b31b44db90f7ff5a1386ad96.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_00b58b87b31b44db90f7ff5a1386ad96();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_00b58b87b31b44db90f7ff5a1386ad96();
    });
  }
});
