
function mudfish_adclean_2573a35f39ed97e1c838ae697bd90675() {
  try {
    Sizzle(`.container > div[style][id]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2573a35f39ed97e1c838ae697bd90675 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2573a35f39ed97e1c838ae697bd90675, function (items) {
  if (mudfish_adclean_g_conf_2573a35f39ed97e1c838ae697bd90675.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2573a35f39ed97e1c838ae697bd90675();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
