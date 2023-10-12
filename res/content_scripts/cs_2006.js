
function mudfish_adclean_b7fb8c0b5373fd4b7c522a3b891e6665() {
  try {
    Sizzle(`div[class^="section-"][class$="-smallad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b7fb8c0b5373fd4b7c522a3b891e6665 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b7fb8c0b5373fd4b7c522a3b891e6665, function (items) {
  if (mudfish_adclean_g_conf_b7fb8c0b5373fd4b7c522a3b891e6665.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b7fb8c0b5373fd4b7c522a3b891e6665();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
