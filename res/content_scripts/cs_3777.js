
function mudfish_adclean_a5a4cfe83f287d5660fd3c77133afbf5() {
  try {
    Sizzle(`a[href*="/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a5a4cfe83f287d5660fd3c77133afbf5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a5a4cfe83f287d5660fd3c77133afbf5, function (items) {
  if (mudfish_adclean_g_conf_a5a4cfe83f287d5660fd3c77133afbf5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a5a4cfe83f287d5660fd3c77133afbf5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a5a4cfe83f287d5660fd3c77133afbf5();
    });
  }
});
