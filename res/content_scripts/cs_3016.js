
function mudfish_adclean_d3a00132ebaca3442155466d147b9492() {
  try {
    Sizzle(`#contentsBodyDiv > table[width]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d3a00132ebaca3442155466d147b9492 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d3a00132ebaca3442155466d147b9492, function (items) {
  if (mudfish_adclean_g_conf_d3a00132ebaca3442155466d147b9492.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d3a00132ebaca3442155466d147b9492();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d3a00132ebaca3442155466d147b9492();
    });
  }
});
