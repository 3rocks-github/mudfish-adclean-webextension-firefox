
function mudfish_adclean_d3f3a7a9f61272cf7340d49de3c1978a() {
  try {
    Sizzle(`#bbs > table[style^="color:#"] ~ div[style*="padding:"][style*="border-left"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d3f3a7a9f61272cf7340d49de3c1978a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d3f3a7a9f61272cf7340d49de3c1978a, function (items) {
  if (mudfish_adclean_g_conf_d3f3a7a9f61272cf7340d49de3c1978a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d3f3a7a9f61272cf7340d49de3c1978a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d3f3a7a9f61272cf7340d49de3c1978a();
    });
  }
});
