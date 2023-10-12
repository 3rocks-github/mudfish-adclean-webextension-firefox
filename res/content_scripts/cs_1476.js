
function mudfish_adclean_21801a6f01b8b691f1e5d4425aed8dd8() {
  try {
    Sizzle(`#ai_widget-2`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_21801a6f01b8b691f1e5d4425aed8dd8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_21801a6f01b8b691f1e5d4425aed8dd8, function (items) {
  if (mudfish_adclean_g_conf_21801a6f01b8b691f1e5d4425aed8dd8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_21801a6f01b8b691f1e5d4425aed8dd8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
