
function mudfish_adclean_13a28e9722df4bf1d9c3942cbe4d832a() {
  try {
    Sizzle(`#top-banner-ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_13a28e9722df4bf1d9c3942cbe4d832a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_13a28e9722df4bf1d9c3942cbe4d832a, function (items) {
  if (mudfish_adclean_g_conf_13a28e9722df4bf1d9c3942cbe4d832a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_13a28e9722df4bf1d9c3942cbe4d832a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_13a28e9722df4bf1d9c3942cbe4d832a();
    });
  }
});
