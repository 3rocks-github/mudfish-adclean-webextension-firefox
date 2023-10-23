
function mudfish_adclean_7172633274f258233efbb0094fa546a7() {
  try {
    Sizzle(`#secondary > aside#search-4 ~ aside`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7172633274f258233efbb0094fa546a7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7172633274f258233efbb0094fa546a7, function (items) {
  if (mudfish_adclean_g_conf_7172633274f258233efbb0094fa546a7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7172633274f258233efbb0094fa546a7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7172633274f258233efbb0094fa546a7();
    });
  }
});
