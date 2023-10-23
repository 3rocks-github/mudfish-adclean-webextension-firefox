
function mudfish_adclean_8afc30e86791b7fbeeea0ea74203a9dc() {
  try {
    Sizzle(`div[id^="article"].miso-post-gallery`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8afc30e86791b7fbeeea0ea74203a9dc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8afc30e86791b7fbeeea0ea74203a9dc, function (items) {
  if (mudfish_adclean_g_conf_8afc30e86791b7fbeeea0ea74203a9dc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8afc30e86791b7fbeeea0ea74203a9dc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8afc30e86791b7fbeeea0ea74203a9dc();
    });
  }
});
