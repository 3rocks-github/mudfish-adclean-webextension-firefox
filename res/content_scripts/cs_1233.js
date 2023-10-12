
function mudfish_adclean_5a1dbf980aafa35554d76bcbb91a3122() {
  try {
    Sizzle(`#article_list > li:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5a1dbf980aafa35554d76bcbb91a3122 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5a1dbf980aafa35554d76bcbb91a3122, function (items) {
  if (mudfish_adclean_g_conf_5a1dbf980aafa35554d76bcbb91a3122.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5a1dbf980aafa35554d76bcbb91a3122();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
