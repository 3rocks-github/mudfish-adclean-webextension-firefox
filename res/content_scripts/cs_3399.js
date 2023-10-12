
function mudfish_adclean_bdf2fbdad7b743f3625d61ffb131a93c() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bdf2fbdad7b743f3625d61ffb131a93c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bdf2fbdad7b743f3625d61ffb131a93c, function (items) {
  if (mudfish_adclean_g_conf_bdf2fbdad7b743f3625d61ffb131a93c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bdf2fbdad7b743f3625d61ffb131a93c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
