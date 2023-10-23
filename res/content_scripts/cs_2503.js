
function mudfish_adclean_94fd9b252cc4b29d44c7b5c62d64ea91() {
  try {
    Sizzle(`body.nate article#mArticle [disp-attr].g_comp:has(iframe[src*="//ad.search.nate.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_94fd9b252cc4b29d44c7b5c62d64ea91 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_94fd9b252cc4b29d44c7b5c62d64ea91, function (items) {
  if (mudfish_adclean_g_conf_94fd9b252cc4b29d44c7b5c62d64ea91.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_94fd9b252cc4b29d44c7b5c62d64ea91();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_94fd9b252cc4b29d44c7b5c62d64ea91();
    });
  }
});
