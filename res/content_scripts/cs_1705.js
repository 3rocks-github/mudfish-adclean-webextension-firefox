
function mudfish_adclean_fa18757980ab7cfe24899ff6e623cd73() {
  try {
    Sizzle(`div[style~="#D5D5D5;"][style~="border-bottom:1px"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fa18757980ab7cfe24899ff6e623cd73 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fa18757980ab7cfe24899ff6e623cd73, function (items) {
  if (mudfish_adclean_g_conf_fa18757980ab7cfe24899ff6e623cd73.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fa18757980ab7cfe24899ff6e623cd73();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fa18757980ab7cfe24899ff6e623cd73();
    });
  }
});
