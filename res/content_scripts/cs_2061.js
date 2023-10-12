
function mudfish_adclean_0484a27f0b71096afdfe8f54d62dceea() {
  try {
    Sizzle(`#sdp-mid-banner-btf`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0484a27f0b71096afdfe8f54d62dceea = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0484a27f0b71096afdfe8f54d62dceea, function (items) {
  if (mudfish_adclean_g_conf_0484a27f0b71096afdfe8f54d62dceea.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0484a27f0b71096afdfe8f54d62dceea();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
