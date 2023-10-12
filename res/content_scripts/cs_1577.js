
function mudfish_adclean_d913fb116455184650679b7f1b2e0866() {
  try {
    Sizzle(`div[id$="_bn"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d913fb116455184650679b7f1b2e0866 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d913fb116455184650679b7f1b2e0866, function (items) {
  if (mudfish_adclean_g_conf_d913fb116455184650679b7f1b2e0866.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d913fb116455184650679b7f1b2e0866();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
