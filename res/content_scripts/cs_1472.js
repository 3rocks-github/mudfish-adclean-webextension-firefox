
function mudfish_adclean_bce2b8254c5efb7554b6999ccdb870af() {
  try {
    Sizzle(`aside[class*="-ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bce2b8254c5efb7554b6999ccdb870af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bce2b8254c5efb7554b6999ccdb870af, function (items) {
  if (mudfish_adclean_g_conf_bce2b8254c5efb7554b6999ccdb870af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bce2b8254c5efb7554b6999ccdb870af();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bce2b8254c5efb7554b6999ccdb870af();
    });
  }
});
