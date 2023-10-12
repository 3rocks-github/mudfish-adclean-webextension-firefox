
function mudfish_adclean_61a1552dafc9984e7e0dbc391a90ad16() {
  try {
    Sizzle(`div[data-list-wrapper="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_61a1552dafc9984e7e0dbc391a90ad16 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_61a1552dafc9984e7e0dbc391a90ad16, function (items) {
  if (mudfish_adclean_g_conf_61a1552dafc9984e7e0dbc391a90ad16.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_61a1552dafc9984e7e0dbc391a90ad16();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
