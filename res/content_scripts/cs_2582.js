
function mudfish_adclean_711ece983418dc41474e0b3cab04c9bc() {
  try {
    Sizzle(`.app > div > div > div[class]:has(> div[class] > div[class] > div[class]:contains(파워링크))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_711ece983418dc41474e0b3cab04c9bc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_711ece983418dc41474e0b3cab04c9bc, function (items) {
  if (mudfish_adclean_g_conf_711ece983418dc41474e0b3cab04c9bc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_711ece983418dc41474e0b3cab04c9bc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_711ece983418dc41474e0b3cab04c9bc();
    });
  }
});
