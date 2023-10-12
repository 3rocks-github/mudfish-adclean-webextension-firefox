
function mudfish_adclean_74f0e2b7290de5c118e436919c935537() {
  try {
    Sizzle(`div[id^="scroll_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_74f0e2b7290de5c118e436919c935537 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_74f0e2b7290de5c118e436919c935537, function (items) {
  if (mudfish_adclean_g_conf_74f0e2b7290de5c118e436919c935537.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_74f0e2b7290de5c118e436919c935537();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
