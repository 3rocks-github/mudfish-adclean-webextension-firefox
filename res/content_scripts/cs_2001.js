
function mudfish_adclean_285757edf01bb216c5cfe3f2a2883953() {
  try {
    Sizzle(`.top-owl.owl-carousel`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_285757edf01bb216c5cfe3f2a2883953 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_285757edf01bb216c5cfe3f2a2883953, function (items) {
  if (mudfish_adclean_g_conf_285757edf01bb216c5cfe3f2a2883953.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_285757edf01bb216c5cfe3f2a2883953();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_285757edf01bb216c5cfe3f2a2883953();
    });
  }
});
