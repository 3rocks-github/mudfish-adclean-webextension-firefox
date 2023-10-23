
function mudfish_adclean_3383136337228a8490fc10398d3bf0d4() {
  try {
    Sizzle(`.main_right > .eto-games`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3383136337228a8490fc10398d3bf0d4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3383136337228a8490fc10398d3bf0d4, function (items) {
  if (mudfish_adclean_g_conf_3383136337228a8490fc10398d3bf0d4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3383136337228a8490fc10398d3bf0d4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3383136337228a8490fc10398d3bf0d4();
    });
  }
});
