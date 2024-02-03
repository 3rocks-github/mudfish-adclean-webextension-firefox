
function mudfish_adclean_1f013ff7d6cb445222bc1077a27d65c5() {
  try {
    Sizzle(`div[class$="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f013ff7d6cb445222bc1077a27d65c5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f013ff7d6cb445222bc1077a27d65c5, function (items) {
  if (mudfish_adclean_g_conf_1f013ff7d6cb445222bc1077a27d65c5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f013ff7d6cb445222bc1077a27d65c5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1f013ff7d6cb445222bc1077a27d65c5();
    });
  }
});
