
function mudfish_adclean_f4e51629efa13cc2efc64435d041f9ab() {
  try {
    Sizzle(`div[id$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f4e51629efa13cc2efc64435d041f9ab = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f4e51629efa13cc2efc64435d041f9ab, function (items) {
  if (mudfish_adclean_g_conf_f4e51629efa13cc2efc64435d041f9ab.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f4e51629efa13cc2efc64435d041f9ab();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
