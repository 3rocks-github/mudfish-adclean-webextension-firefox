
function mudfish_adclean_bb1fa1bfa0386b206b706a6ea1136f4e() {
  try {
    Sizzle(`div[class$="mobile-banner"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb1fa1bfa0386b206b706a6ea1136f4e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb1fa1bfa0386b206b706a6ea1136f4e, function (items) {
  if (mudfish_adclean_g_conf_bb1fa1bfa0386b206b706a6ea1136f4e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb1fa1bfa0386b206b706a6ea1136f4e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bb1fa1bfa0386b206b706a6ea1136f4e();
    });
  }
});
