
function mudfish_adclean_c780c0077d379fddee9ec0c49b797fb4() {
  try {
    Sizzle(`.ad-cont-box ~ div[style^="margin:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c780c0077d379fddee9ec0c49b797fb4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c780c0077d379fddee9ec0c49b797fb4, function (items) {
  if (mudfish_adclean_g_conf_c780c0077d379fddee9ec0c49b797fb4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c780c0077d379fddee9ec0c49b797fb4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c780c0077d379fddee9ec0c49b797fb4();
    });
  }
});
