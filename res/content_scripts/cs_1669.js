
function mudfish_adclean_feb1e7a0b01269493f65cd815abe3208() {
  try {
    Sizzle(`a[href^="/ad_link.php?"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_feb1e7a0b01269493f65cd815abe3208 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_feb1e7a0b01269493f65cd815abe3208, function (items) {
  if (mudfish_adclean_g_conf_feb1e7a0b01269493f65cd815abe3208.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_feb1e7a0b01269493f65cd815abe3208();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_feb1e7a0b01269493f65cd815abe3208();
    });
  }
});
