
function mudfish_adclean_5dfa92ce03e3923108956966a1def7da() {
  try {
    Sizzle(`div[onclick^="wcs.event("]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5dfa92ce03e3923108956966a1def7da = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5dfa92ce03e3923108956966a1def7da, function (items) {
  if (mudfish_adclean_g_conf_5dfa92ce03e3923108956966a1def7da.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5dfa92ce03e3923108956966a1def7da();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5dfa92ce03e3923108956966a1def7da();
    });
  }
});
