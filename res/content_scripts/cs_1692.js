
function mudfish_adclean_b3f0b73a647898f89b4255be2e334e98() {
  try {
    Sizzle(`.mt30 .con_rt > style + div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b3f0b73a647898f89b4255be2e334e98 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b3f0b73a647898f89b4255be2e334e98, function (items) {
  if (mudfish_adclean_g_conf_b3f0b73a647898f89b4255be2e334e98.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b3f0b73a647898f89b4255be2e334e98();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
