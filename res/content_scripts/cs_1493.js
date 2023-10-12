
function mudfish_adclean_7f9b224c0c7139d82bec783a83b9991b() {
  try {
    Sizzle(`body > div[id][class][onclick*="Layer"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7f9b224c0c7139d82bec783a83b9991b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7f9b224c0c7139d82bec783a83b9991b, function (items) {
  if (mudfish_adclean_g_conf_7f9b224c0c7139d82bec783a83b9991b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7f9b224c0c7139d82bec783a83b9991b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
