
function mudfish_adclean_51b7d7c1d6a4bf5304fd56460bcda37f() {
  try {
    Sizzle(`.bxslider`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_51b7d7c1d6a4bf5304fd56460bcda37f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_51b7d7c1d6a4bf5304fd56460bcda37f, function (items) {
  if (mudfish_adclean_g_conf_51b7d7c1d6a4bf5304fd56460bcda37f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_51b7d7c1d6a4bf5304fd56460bcda37f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_51b7d7c1d6a4bf5304fd56460bcda37f();
    });
  }
});
