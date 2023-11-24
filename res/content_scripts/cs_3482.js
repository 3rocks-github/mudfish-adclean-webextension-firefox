
function mudfish_adclean_2a6d119a7eae2d9dd465a256da06b8f5() {
  try {
    Sizzle(`div[class$="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2a6d119a7eae2d9dd465a256da06b8f5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2a6d119a7eae2d9dd465a256da06b8f5, function (items) {
  if (mudfish_adclean_g_conf_2a6d119a7eae2d9dd465a256da06b8f5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2a6d119a7eae2d9dd465a256da06b8f5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2a6d119a7eae2d9dd465a256da06b8f5();
    });
  }
});
