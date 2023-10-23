
function mudfish_adclean_938c019af1407ec6850ec8ce61860026() {
  try {
    Sizzle(`.article_view ~ div[style^="text-align:"].clean_banner +.h50`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_938c019af1407ec6850ec8ce61860026 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_938c019af1407ec6850ec8ce61860026, function (items) {
  if (mudfish_adclean_g_conf_938c019af1407ec6850ec8ce61860026.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_938c019af1407ec6850ec8ce61860026();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_938c019af1407ec6850ec8ce61860026();
    });
  }
});
