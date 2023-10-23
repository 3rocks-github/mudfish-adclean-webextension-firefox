
function mudfish_adclean_ba3c9fe4ecc62668132ab6bce2a61ca3() {
  try {
    Sizzle(`a[onclick^="goAD"][onclick$="()"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ba3c9fe4ecc62668132ab6bce2a61ca3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ba3c9fe4ecc62668132ab6bce2a61ca3, function (items) {
  if (mudfish_adclean_g_conf_ba3c9fe4ecc62668132ab6bce2a61ca3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ba3c9fe4ecc62668132ab6bce2a61ca3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ba3c9fe4ecc62668132ab6bce2a61ca3();
    });
  }
});
