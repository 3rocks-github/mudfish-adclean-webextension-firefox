
function mudfish_adclean_ea5e5104d2f349165b759c5f34c82d20() {
  try {
    Sizzle(`main > section[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ea5e5104d2f349165b759c5f34c82d20 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ea5e5104d2f349165b759c5f34c82d20, function (items) {
  if (mudfish_adclean_g_conf_ea5e5104d2f349165b759c5f34c82d20.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ea5e5104d2f349165b759c5f34c82d20();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ea5e5104d2f349165b759c5f34c82d20();
    });
  }
});
