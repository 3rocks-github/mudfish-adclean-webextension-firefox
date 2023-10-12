
function mudfish_adclean_85d86946b7a256637b6b3a800118c13b() {
  try {
    Sizzle(`.search_content > section[data-log-actionid-area="recommend"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_85d86946b7a256637b6b3a800118c13b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_85d86946b7a256637b6b3a800118c13b, function (items) {
  if (mudfish_adclean_g_conf_85d86946b7a256637b6b3a800118c13b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_85d86946b7a256637b6b3a800118c13b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
