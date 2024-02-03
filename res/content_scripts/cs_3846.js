
function mudfish_adclean_ef9efa988d7fadad50f6b734c3524961() {
  try {
    Sizzle(`#aside div[class^="scroll-in"] .bn:has(a[href^="/ad_link.php?"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ef9efa988d7fadad50f6b734c3524961 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ef9efa988d7fadad50f6b734c3524961, function (items) {
  if (mudfish_adclean_g_conf_ef9efa988d7fadad50f6b734c3524961.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ef9efa988d7fadad50f6b734c3524961();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ef9efa988d7fadad50f6b734c3524961();
    });
  }
});
