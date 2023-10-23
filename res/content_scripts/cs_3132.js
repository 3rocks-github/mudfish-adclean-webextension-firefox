
function mudfish_adclean_9b5030c99df064711f9bc5e1bbd0107c() {
  try {
    Sizzle(`div[id^="ad"][class^="ad"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9b5030c99df064711f9bc5e1bbd0107c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9b5030c99df064711f9bc5e1bbd0107c, function (items) {
  if (mudfish_adclean_g_conf_9b5030c99df064711f9bc5e1bbd0107c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9b5030c99df064711f9bc5e1bbd0107c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9b5030c99df064711f9bc5e1bbd0107c();
    });
  }
});
