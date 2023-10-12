
function mudfish_adclean_3282e99cb1d6e3e2442ce4c19dfe8ccc() {
  try {
    Sizzle(`center > .bn`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3282e99cb1d6e3e2442ce4c19dfe8ccc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3282e99cb1d6e3e2442ce4c19dfe8ccc, function (items) {
  if (mudfish_adclean_g_conf_3282e99cb1d6e3e2442ce4c19dfe8ccc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3282e99cb1d6e3e2442ce4c19dfe8ccc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
