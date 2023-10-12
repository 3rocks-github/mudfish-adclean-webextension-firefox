
function mudfish_adclean_97bf8b713e4706feaefa676f06ced9cb() {
  try {
    Sizzle(`#adBlockPixelTag`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_97bf8b713e4706feaefa676f06ced9cb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_97bf8b713e4706feaefa676f06ced9cb, function (items) {
  if (mudfish_adclean_g_conf_97bf8b713e4706feaefa676f06ced9cb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_97bf8b713e4706feaefa676f06ced9cb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
