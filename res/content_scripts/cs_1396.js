
function mudfish_adclean_3ee0ad9c5724c54b3d908e0ea61e6679() {
  try {
    Sizzle(`#wrap_right > #right`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3ee0ad9c5724c54b3d908e0ea61e6679 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3ee0ad9c5724c54b3d908e0ea61e6679, function (items) {
  if (mudfish_adclean_g_conf_3ee0ad9c5724c54b3d908e0ea61e6679.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3ee0ad9c5724c54b3d908e0ea61e6679();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3ee0ad9c5724c54b3d908e0ea61e6679();
    });
  }
});
