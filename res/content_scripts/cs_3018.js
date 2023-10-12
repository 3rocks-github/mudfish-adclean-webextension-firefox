
function mudfish_adclean_124881d3cc36aa9cefe62b3e9fcf85b7() {
  try {
    Sizzle(`div[data-ad][class][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_124881d3cc36aa9cefe62b3e9fcf85b7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_124881d3cc36aa9cefe62b3e9fcf85b7, function (items) {
  if (mudfish_adclean_g_conf_124881d3cc36aa9cefe62b3e9fcf85b7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_124881d3cc36aa9cefe62b3e9fcf85b7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
