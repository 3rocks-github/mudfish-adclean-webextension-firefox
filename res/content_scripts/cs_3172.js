
function mudfish_adclean_c9ef67a5babb59cd93721c77ec880353() {
  try {
    Sizzle(`.npia-board-gallery`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c9ef67a5babb59cd93721c77ec880353 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c9ef67a5babb59cd93721c77ec880353, function (items) {
  if (mudfish_adclean_g_conf_c9ef67a5babb59cd93721c77ec880353.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c9ef67a5babb59cd93721c77ec880353();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c9ef67a5babb59cd93721c77ec880353();
    });
  }
});
