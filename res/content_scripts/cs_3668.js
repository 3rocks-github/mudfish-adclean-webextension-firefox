
function mudfish_adclean_c591354c1a06d0e606f85f8fa2a37496() {
  try {
    Sizzle(`div[class*="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c591354c1a06d0e606f85f8fa2a37496 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c591354c1a06d0e606f85f8fa2a37496, function (items) {
  if (mudfish_adclean_g_conf_c591354c1a06d0e606f85f8fa2a37496.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c591354c1a06d0e606f85f8fa2a37496();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c591354c1a06d0e606f85f8fa2a37496();
    });
  }
});
