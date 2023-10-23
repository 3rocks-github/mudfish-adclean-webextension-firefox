
function mudfish_adclean_2d9a248ca7e0479b80f6f3fc47213395() {
  try {
    Sizzle(`div[id^="floating_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2d9a248ca7e0479b80f6f3fc47213395 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2d9a248ca7e0479b80f6f3fc47213395, function (items) {
  if (mudfish_adclean_g_conf_2d9a248ca7e0479b80f6f3fc47213395.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2d9a248ca7e0479b80f6f3fc47213395();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2d9a248ca7e0479b80f6f3fc47213395();
    });
  }
});
