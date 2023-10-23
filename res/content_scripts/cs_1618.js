
function mudfish_adclean_967caf82c111d6ebd4421bab26f39323() {
  try {
    Sizzle(`body > div[style^="min-height:"]:not([class]):not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_967caf82c111d6ebd4421bab26f39323 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_967caf82c111d6ebd4421bab26f39323, function (items) {
  if (mudfish_adclean_g_conf_967caf82c111d6ebd4421bab26f39323.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_967caf82c111d6ebd4421bab26f39323();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_967caf82c111d6ebd4421bab26f39323();
    });
  }
});
