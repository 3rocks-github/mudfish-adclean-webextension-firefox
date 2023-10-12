
function mudfish_adclean_25ad6580c6a4787fc095c035aba02484() {
  try {
    Sizzle(`div[id*="_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_25ad6580c6a4787fc095c035aba02484 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_25ad6580c6a4787fc095c035aba02484, function (items) {
  if (mudfish_adclean_g_conf_25ad6580c6a4787fc095c035aba02484.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_25ad6580c6a4787fc095c035aba02484();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
