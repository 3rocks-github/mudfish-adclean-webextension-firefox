
function mudfish_adclean_a65897724c62bb4c746adfa385dad951() {
  try {
    Sizzle(`div[class*="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a65897724c62bb4c746adfa385dad951 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a65897724c62bb4c746adfa385dad951, function (items) {
  if (mudfish_adclean_g_conf_a65897724c62bb4c746adfa385dad951.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a65897724c62bb4c746adfa385dad951();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a65897724c62bb4c746adfa385dad951();
    });
  }
});
