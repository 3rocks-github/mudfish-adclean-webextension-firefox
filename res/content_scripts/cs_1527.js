
function mudfish_adclean_5365a8c1c45fd547065595d16ebbeeab() {
  try {
    Sizzle(`main div[id*="_banner"][id^="welcome_"][class$="_area"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5365a8c1c45fd547065595d16ebbeeab = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5365a8c1c45fd547065595d16ebbeeab, function (items) {
  if (mudfish_adclean_g_conf_5365a8c1c45fd547065595d16ebbeeab.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5365a8c1c45fd547065595d16ebbeeab();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5365a8c1c45fd547065595d16ebbeeab();
    });
  }
});
