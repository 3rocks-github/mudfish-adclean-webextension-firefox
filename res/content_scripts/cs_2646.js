
function mudfish_adclean_ca57ec919ad98150d9add43b11603224() {
  try {
    Sizzle(`.vertical-ads`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ca57ec919ad98150d9add43b11603224 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ca57ec919ad98150d9add43b11603224, function (items) {
  if (mudfish_adclean_g_conf_ca57ec919ad98150d9add43b11603224.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ca57ec919ad98150d9add43b11603224();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
