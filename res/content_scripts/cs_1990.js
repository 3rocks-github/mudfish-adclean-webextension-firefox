
function mudfish_adclean_583d3b5cfe21dfd7dadb97b4a03f1bd3() {
  try {
    Sizzle(`iframe[src^="/advert/advert.php"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_583d3b5cfe21dfd7dadb97b4a03f1bd3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_583d3b5cfe21dfd7dadb97b4a03f1bd3, function (items) {
  if (mudfish_adclean_g_conf_583d3b5cfe21dfd7dadb97b4a03f1bd3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_583d3b5cfe21dfd7dadb97b4a03f1bd3();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
