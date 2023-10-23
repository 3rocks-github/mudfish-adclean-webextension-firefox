
function mudfish_adclean_ca9823d100d2cd9bb2f6490d5c7b7145() {
  try {
    Sizzle(`aside div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ca9823d100d2cd9bb2f6490d5c7b7145 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ca9823d100d2cd9bb2f6490d5c7b7145, function (items) {
  if (mudfish_adclean_g_conf_ca9823d100d2cd9bb2f6490d5c7b7145.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ca9823d100d2cd9bb2f6490d5c7b7145();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ca9823d100d2cd9bb2f6490d5c7b7145();
    });
  }
});
