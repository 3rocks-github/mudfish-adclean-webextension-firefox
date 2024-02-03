
function mudfish_adclean_0e654fc7891d4f87e5743f0d7c5c6112() {
  try {
    Sizzle(`div[id^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0e654fc7891d4f87e5743f0d7c5c6112 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0e654fc7891d4f87e5743f0d7c5c6112, function (items) {
  if (mudfish_adclean_g_conf_0e654fc7891d4f87e5743f0d7c5c6112.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0e654fc7891d4f87e5743f0d7c5c6112();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0e654fc7891d4f87e5743f0d7c5c6112();
    });
  }
});
