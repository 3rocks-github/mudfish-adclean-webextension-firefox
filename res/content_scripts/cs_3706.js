
function mudfish_adclean_3396a0b32c7c1919f33d4669d7685dd4() {
  try {
    Sizzle(`#section_plusPrd`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3396a0b32c7c1919f33d4669d7685dd4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3396a0b32c7c1919f33d4669d7685dd4, function (items) {
  if (mudfish_adclean_g_conf_3396a0b32c7c1919f33d4669d7685dd4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3396a0b32c7c1919f33d4669d7685dd4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3396a0b32c7c1919f33d4669d7685dd4();
    });
  }
});
