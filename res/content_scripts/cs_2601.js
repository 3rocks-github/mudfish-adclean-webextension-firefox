
function mudfish_adclean_af59730867ec42c62dcbe0fb89a65e04() {
  try {
    Sizzle(`#adContainer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_af59730867ec42c62dcbe0fb89a65e04 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_af59730867ec42c62dcbe0fb89a65e04, function (items) {
  if (mudfish_adclean_g_conf_af59730867ec42c62dcbe0fb89a65e04.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_af59730867ec42c62dcbe0fb89a65e04();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
