
function mudfish_adclean_378974bb500056417fe90e5908b59d33() {
  try {
    Sizzle(`#adContainer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_378974bb500056417fe90e5908b59d33 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_378974bb500056417fe90e5908b59d33, function (items) {
  if (mudfish_adclean_g_conf_378974bb500056417fe90e5908b59d33.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_378974bb500056417fe90e5908b59d33();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_378974bb500056417fe90e5908b59d33();
    });
  }
});
