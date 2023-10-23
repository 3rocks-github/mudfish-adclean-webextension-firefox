
function mudfish_adclean_b098875982080bdd8ceef702860b7dd5() {
  try {
    Sizzle(`div[class$="top_hotdeal"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b098875982080bdd8ceef702860b7dd5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b098875982080bdd8ceef702860b7dd5, function (items) {
  if (mudfish_adclean_g_conf_b098875982080bdd8ceef702860b7dd5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b098875982080bdd8ceef702860b7dd5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b098875982080bdd8ceef702860b7dd5();
    });
  }
});
