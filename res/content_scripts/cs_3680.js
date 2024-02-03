
function mudfish_adclean_6d9a64a7fb43ce2e560b4d4cafe0384b() {
  try {
    Sizzle(`aside > div[class*=" "]:has(iframe[src*="arca.live/external/callad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6d9a64a7fb43ce2e560b4d4cafe0384b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6d9a64a7fb43ce2e560b4d4cafe0384b, function (items) {
  if (mudfish_adclean_g_conf_6d9a64a7fb43ce2e560b4d4cafe0384b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6d9a64a7fb43ce2e560b4d4cafe0384b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6d9a64a7fb43ce2e560b4d4cafe0384b();
    });
  }
});
