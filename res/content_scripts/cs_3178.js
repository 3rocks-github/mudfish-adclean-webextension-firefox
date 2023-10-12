
function mudfish_adclean_dd204d496450698e1dc047ca7bd40264() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dd204d496450698e1dc047ca7bd40264 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dd204d496450698e1dc047ca7bd40264, function (items) {
  if (mudfish_adclean_g_conf_dd204d496450698e1dc047ca7bd40264.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dd204d496450698e1dc047ca7bd40264();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
