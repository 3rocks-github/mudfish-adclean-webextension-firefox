
function mudfish_adclean_49df6cb7d83fc2240e104f8d434a2bdc() {
  try {
    Sizzle(`.sponsor_pick`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_49df6cb7d83fc2240e104f8d434a2bdc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_49df6cb7d83fc2240e104f8d434a2bdc, function (items) {
  if (mudfish_adclean_g_conf_49df6cb7d83fc2240e104f8d434a2bdc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_49df6cb7d83fc2240e104f8d434a2bdc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_49df6cb7d83fc2240e104f8d434a2bdc();
    });
  }
});
