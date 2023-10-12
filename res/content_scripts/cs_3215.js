
function mudfish_adclean_ccc3904f7cbfbe03cb00ff8966304cd5() {
  try {
    Sizzle(`form#fboardlist table tr:has(span.text-muted:contains(AD))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ccc3904f7cbfbe03cb00ff8966304cd5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ccc3904f7cbfbe03cb00ff8966304cd5, function (items) {
  if (mudfish_adclean_g_conf_ccc3904f7cbfbe03cb00ff8966304cd5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ccc3904f7cbfbe03cb00ff8966304cd5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
