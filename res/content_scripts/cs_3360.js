
function mudfish_adclean_b76e4dfb91c2d71c91b1b03e3cc5844b() {
  try {
    Sizzle(`div[class$="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b76e4dfb91c2d71c91b1b03e3cc5844b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b76e4dfb91c2d71c91b1b03e3cc5844b, function (items) {
  if (mudfish_adclean_g_conf_b76e4dfb91c2d71c91b1b03e3cc5844b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b76e4dfb91c2d71c91b1b03e3cc5844b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
