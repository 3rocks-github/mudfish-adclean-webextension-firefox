
function mudfish_adclean_4dee60061b4373f2fe09ff715d1cee16() {
  try {
    Sizzle(`div[class$="mobile-banner"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4dee60061b4373f2fe09ff715d1cee16 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4dee60061b4373f2fe09ff715d1cee16, function (items) {
  if (mudfish_adclean_g_conf_4dee60061b4373f2fe09ff715d1cee16.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4dee60061b4373f2fe09ff715d1cee16();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4dee60061b4373f2fe09ff715d1cee16();
    });
  }
});
