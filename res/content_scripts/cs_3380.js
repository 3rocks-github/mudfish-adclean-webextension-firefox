
function mudfish_adclean_d68b40404d0bde0a8fb2f1e503033465() {
  try {
    Sizzle(`div[class*="_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d68b40404d0bde0a8fb2f1e503033465 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d68b40404d0bde0a8fb2f1e503033465, function (items) {
  if (mudfish_adclean_g_conf_d68b40404d0bde0a8fb2f1e503033465.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d68b40404d0bde0a8fb2f1e503033465();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
