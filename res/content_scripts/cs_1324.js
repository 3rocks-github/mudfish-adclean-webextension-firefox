
function mudfish_adclean_356c8389deeb3127d89247b9e69c249a() {
  try {
    Sizzle(`#cCon + aside.sidebar2`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_356c8389deeb3127d89247b9e69c249a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_356c8389deeb3127d89247b9e69c249a, function (items) {
  if (mudfish_adclean_g_conf_356c8389deeb3127d89247b9e69c249a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_356c8389deeb3127d89247b9e69c249a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
