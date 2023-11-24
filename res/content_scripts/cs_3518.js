
function mudfish_adclean_5414e4d7397fa4cb71ccf7abd4b651d6() {
  try {
    Sizzle(`.topbanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5414e4d7397fa4cb71ccf7abd4b651d6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5414e4d7397fa4cb71ccf7abd4b651d6, function (items) {
  if (mudfish_adclean_g_conf_5414e4d7397fa4cb71ccf7abd4b651d6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5414e4d7397fa4cb71ccf7abd4b651d6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5414e4d7397fa4cb71ccf7abd4b651d6();
    });
  }
});
