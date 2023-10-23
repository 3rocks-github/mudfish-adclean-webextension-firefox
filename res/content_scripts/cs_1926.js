
function mudfish_adclean_1bc751a78da1ae2ee2dd512403ef9ac5() {
  try {
    Sizzle(`div[id^="dablewidget_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1bc751a78da1ae2ee2dd512403ef9ac5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1bc751a78da1ae2ee2dd512403ef9ac5, function (items) {
  if (mudfish_adclean_g_conf_1bc751a78da1ae2ee2dd512403ef9ac5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1bc751a78da1ae2ee2dd512403ef9ac5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1bc751a78da1ae2ee2dd512403ef9ac5();
    });
  }
});
