
function mudfish_adclean_9193af194720a987756cecb0ad292e42() {
  try {
    Sizzle(`div[class^="news_"] > div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9193af194720a987756cecb0ad292e42 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9193af194720a987756cecb0ad292e42, function (items) {
  if (mudfish_adclean_g_conf_9193af194720a987756cecb0ad292e42.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9193af194720a987756cecb0ad292e42();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
