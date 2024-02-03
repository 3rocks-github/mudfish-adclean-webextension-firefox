
function mudfish_adclean_2981e2a82612864f46a6f30a2b9677a0() {
  try {
    Sizzle(`div[class^="popup_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2981e2a82612864f46a6f30a2b9677a0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2981e2a82612864f46a6f30a2b9677a0, function (items) {
  if (mudfish_adclean_g_conf_2981e2a82612864f46a6f30a2b9677a0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2981e2a82612864f46a6f30a2b9677a0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2981e2a82612864f46a6f30a2b9677a0();
    });
  }
});
