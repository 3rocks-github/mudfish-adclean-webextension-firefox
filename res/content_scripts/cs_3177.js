
function mudfish_adclean_2b298d04751853abebbcfb338919b224() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2b298d04751853abebbcfb338919b224 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2b298d04751853abebbcfb338919b224, function (items) {
  if (mudfish_adclean_g_conf_2b298d04751853abebbcfb338919b224.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2b298d04751853abebbcfb338919b224();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
