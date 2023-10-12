
function mudfish_adclean_97b13f7c7055ac53e4ab791304eea394() {
  try {
    Sizzle(`#main-menu div[style][align]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_97b13f7c7055ac53e4ab791304eea394 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_97b13f7c7055ac53e4ab791304eea394, function (items) {
  if (mudfish_adclean_g_conf_97b13f7c7055ac53e4ab791304eea394.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_97b13f7c7055ac53e4ab791304eea394();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
