
function mudfish_adclean_f6dc75469b1f7c54309e7b37953254ad() {
  try {
    Sizzle(`#aside > div[style^="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f6dc75469b1f7c54309e7b37953254ad = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f6dc75469b1f7c54309e7b37953254ad, function (items) {
  if (mudfish_adclean_g_conf_f6dc75469b1f7c54309e7b37953254ad.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f6dc75469b1f7c54309e7b37953254ad();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f6dc75469b1f7c54309e7b37953254ad();
    });
  }
});
