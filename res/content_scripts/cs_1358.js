
function mudfish_adclean_fa71e837f07bb2bf6f200e11ff147254() {
  try {
    Sizzle(`div[class^="sponsor"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fa71e837f07bb2bf6f200e11ff147254 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fa71e837f07bb2bf6f200e11ff147254, function (items) {
  if (mudfish_adclean_g_conf_fa71e837f07bb2bf6f200e11ff147254.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fa71e837f07bb2bf6f200e11ff147254();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fa71e837f07bb2bf6f200e11ff147254();
    });
  }
});
