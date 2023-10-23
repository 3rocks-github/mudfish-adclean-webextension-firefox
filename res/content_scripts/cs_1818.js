
function mudfish_adclean_e5a7643ab02ed71071941235d47ee7d4() {
  try {
    Sizzle(`#__layout > div:not([class]) > [class]:not(footer) > div[class]:not([sm]):not(.page-container)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e5a7643ab02ed71071941235d47ee7d4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e5a7643ab02ed71071941235d47ee7d4, function (items) {
  if (mudfish_adclean_g_conf_e5a7643ab02ed71071941235d47ee7d4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e5a7643ab02ed71071941235d47ee7d4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e5a7643ab02ed71071941235d47ee7d4();
    });
  }
});
