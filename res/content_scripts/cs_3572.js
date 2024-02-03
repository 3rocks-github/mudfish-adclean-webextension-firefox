
function mudfish_adclean_bb5b6195e04b48a3a463ebe61061bcae() {
  try {
    Sizzle(`#knock ~ dd[class^="gbt"]#d3`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb5b6195e04b48a3a463ebe61061bcae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb5b6195e04b48a3a463ebe61061bcae, function (items) {
  if (mudfish_adclean_g_conf_bb5b6195e04b48a3a463ebe61061bcae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb5b6195e04b48a3a463ebe61061bcae();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bb5b6195e04b48a3a463ebe61061bcae();
    });
  }
});
